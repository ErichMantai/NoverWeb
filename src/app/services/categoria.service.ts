import {Injectable} from '@angular/core';
import {Produto} from '../class/produto';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GenericService} from '../common/generic.service'
import {Categoria} from "../class/categoria";

@Injectable()
export class CategoriaService extends GenericService<Categoria> {
  constructor(public http: Http) {
    super(http);
    this.setModuleAndType('categorias', Categoria)
  }
}
