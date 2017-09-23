import {GenericClass} from '../common/generic.class'
import {Produto} from "./produto";

export class ItemPedido extends GenericClass {
  produto: Produto;

  static newInstance($key: string,
                     produto: Produto): ItemPedido {
    const obj = new ItemPedido()
    obj.$key = $key;
    obj.produto = produto;
    return obj;
  }
}
