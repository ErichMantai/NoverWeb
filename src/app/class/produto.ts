import {GenericClass} from '../common/generic.class'
import {ProdutoDetalhe} from "./produto-detalhe";
import {Cardapio} from "./cardapio";

export class Produto extends GenericClass {
  descricao: string;
  valor: number;
  promocao: boolean;
  detalhes: Array<ProdutoDetalhe>;
  cardapio: Array<Cardapio>;

  static newInstance($key: string,
                     descricao: string,
                     valor: number,
                     promocao: boolean,
                     detalhes: Array<ProdutoDetalhe>,
                     cardapio: Array<Cardapio>): Produto {
    const obj = new Produto()
    obj.$key = $key;
    obj.descricao = descricao;
    obj.valor = valor;
    obj.promocao = promocao;
    obj.detalhes = detalhes;
    obj.cardapio = cardapio;
    return obj;
  }
}
