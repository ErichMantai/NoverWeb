import {FirebaseConfig} from '../services/providers.service'
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GenericClass} from './generic.class';

export class GenericService<T extends GenericClass> {
  private _firebaseConfig = FirebaseConfig;
  private _organization = 'escarabajo';
  private _baseUrl = `${this._firebaseConfig.databaseURL}/organizations/${this._organization}`;
  private _module: string;
  private _serviceName = this.constructor.toString().match(/\w+/g)[1];
  private _errorHandler = error => console.error(`${this._serviceName} error`, error);
  public type: T;

  constructor(public _http: Http) {
  }

  insert(obj: T) {
    const json = JSON.stringify(obj);
    return this._http.post(this._baseUrl + `/${this._module}.json`, json)
      .toPromise()
      .catch(this._errorHandler);
  }

  findAll(sortField?): Promise<any> {
    return this._http.get(this._baseUrl + `/${this._module}.json`)
      .toPromise()
      .then(response => this.convert(response.json(), sortField))
      .catch(this._errorHandler);
  }

  delete(obj: T) {
    return this._http.delete(this._baseUrl + `/${this._module}/${obj.$key}.json`)
      .toPromise()
      .catch(this._errorHandler);
  }

  update(obj: T) {
    const $key = obj.$key;
    delete obj.$key;
    const json = JSON.stringify(obj)

    return this._http.patch(this._baseUrl + `/${this._module}/${$key}.json`, json)
      .toPromise()
      .catch(this._errorHandler);
  }

  clazz<T extends GenericClass>(type: { new(): T; }): T {
    return new type();
  }

  setType(TCreator: { new (): T; }) {
    this.type = new TCreator();
  }

  private convert(parsedResponse, sortField) {
    let values = [];
    if (parsedResponse) {
      values = Object.keys(parsedResponse)
        .map(id => {
          const obj = this.type.parseResponse(parsedResponse[id]);
          obj.$key = id;
          return obj
        });

      if (sortField) {
        values = values
          .sort((a, b) => (a[sortField] && b[sortField]) ? a[sortField].localeCompare(b[sortField]) : 0);
      }
    }
    return values
  }

  get organization(): string {
    return this._organization;
  }

  set organization(value: string) {
    this._organization = value;
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  set baseUrl(value: string) {
    this._baseUrl = value;
  }

  get module(): string {
    return this._module;
  }

  set module(value: string) {
    this._module = value;
  }

  get errorHandler(): (error?) => void {
    return this._errorHandler;
  }

  set errorHandler(value: (error?) => void) {
    this._errorHandler = value;
  }

  get serviceName(): string {
    return this._serviceName;
  }

  set serviceName(value: string) {
    this._serviceName = value;
  }


  get firebaseConfig(): { apiKey: string; authDomain: string; databaseURL: string; projectId: string; storageBucket: string; messagingSenderId: string } {
    return this._firebaseConfig;
  }

  set firebaseConfig(value: { apiKey: string; authDomain: string; databaseURL: string; projectId: string; storageBucket: string; messagingSenderId: string }) {
    this._firebaseConfig = value;
  }


  get http(): Http {
    return this._http;
  }

  set http(value: Http) {
    this._http = value;
  }

  setModuleAndType(module: string, typeStr: { new (): T; }) {
    this.module = module;
    this.type = new typeStr();
  }
}
