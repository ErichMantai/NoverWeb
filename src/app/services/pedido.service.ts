import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GenericService} from '../common/generic.service'
import {Pedido} from "../class/pedido";

@Injectable()
export class PedidoService extends GenericService<Pedido> {
  constructor(public http: Http) {
    super(http);
    this.setModuleAndType('pedidos', Pedido)
  }
}
