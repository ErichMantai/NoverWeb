import {GenericClass} from '../common/generic.class'

export class Cardapio extends GenericClass {
  descricao: string;

  static newInstance(key: string,
                     descricao: string,): Cardapio {
    const obj = new Cardapio()
    obj.key = key;
    obj.descricao = descricao;
    return obj;
  }
}
