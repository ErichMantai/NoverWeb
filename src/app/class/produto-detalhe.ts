import {GenericClass} from '../common/generic.class'

export class ProdutoDetalhe extends GenericClass {
  descricao: string;

  static newInstance($key: string,
                     descricao: string): ProdutoDetalhe {
    const obj = new ProdutoDetalhe()
    obj.$key = $key;
    obj.descricao = descricao;
    return obj;
  }
}
