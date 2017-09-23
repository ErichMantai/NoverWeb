import {Injectable} from '@angular/core';
import {Produto} from '../class/produto';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GenericService} from '../common/generic.service'

@Injectable()
export class ProdutoService extends GenericService<Produto> {
  constructor(public http: Http) {
    super(http);
    this.setModuleAndType('produtos', Produto)
  }
}
