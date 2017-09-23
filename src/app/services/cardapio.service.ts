import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GenericService} from '../common/generic.service'
import {Cardapio} from "../class/cardapio";

@Injectable()
export class CardapioService extends GenericService<Cardapio> {
  constructor(public http: Http) {
    super(http);
    this.setModuleAndType('cardapios', Cardapio)
  }
}
