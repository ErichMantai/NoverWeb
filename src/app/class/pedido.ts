import {GenericClass} from '../common/generic.class'
import {StatusPedido} from "./StatusPedido";
import {ItemPedido} from "./item-pedido";

export class Pedido extends GenericClass {
  data: Date;
  status: StatusPedido;
  itens: Array<ItemPedido>;

  static newInstance($key: string,
                     data: Date,
                     status: StatusPedido,
                     itens: Array<ItemPedido>): Pedido {
    const obj = new Pedido();
    obj.$key = $key;
    obj.data = data;
    obj.status = status;
    obj.itens = itens;
    return obj;
  }
}
