import {GenericClass} from '../common/generic.class'

export class Categoria extends GenericClass {
  descricao: string;

  static newInstance(key: string,
                     descricao: string): Categoria {
    const obj = new Categoria()
    obj.key = key;
    obj.descricao = descricao;
    return obj;
  }
}
