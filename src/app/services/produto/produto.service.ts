import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { FirebaseConfig } from './../providers.service'
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProdutoService {
  firebaseConfig = FirebaseConfig;
  organization = 'escarabajo';
  baseUrl = `${this.firebaseConfig.databaseURL}/organizations/${this.organization}`;
  errorHandler = error => console.error('ProdutosService error', error);

  constructor(private http: Http) { }

  insert(obj: Produto) {
    const json = JSON.stringify(obj)
    return this.http.post(this.baseUrl + `/produtos.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  findAll(): Promise<any> {
    return this.http.get(this.baseUrl + `/produtos.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  delete(obj: Produto) {
    return this.http.delete(this.baseUrl + `/${obj.$key}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  update(obj: Produto) {
    const json = JSON.stringify(obj)

    return this.http.patch(this.baseUrl + `/${obj.$key}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => (Produto.parseResponse(parsedResponse[id])))
      .sort((a, b) => (a.descricao && b.descricao) ? a.descricao.localeCompare(b.descricao) : 0);
  }

}
