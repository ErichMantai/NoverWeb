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
    return this.http.delete(this.baseUrl + `/produtos/${obj.$key}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  update(obj: Produto) {
    const $key = obj.$key
    delete obj.$key
    const json = JSON.stringify(obj)

    return this.http.patch(this.baseUrl + `/produtos/${$key}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    console.log(parsedResponse)
    return parsedResponse
      ? Object.keys(parsedResponse)
      .map(id => {
        const obj = Produto.parseResponse(parsedResponse[id])
        obj.$key = id
        return obj
      })
      .sort((a, b) => (a.descricao && b.descricao) ? a.descricao.localeCompare(b.descricao) : 0)
      : null;
  }

}
