import {GenericClass} from '../common/generic.class'
import {Endereco} from "./endereco";

export class Cliente extends GenericClass {
  email: string;
  senha: string;
  telefone: string;
  tipoCliente: string;
  enderecos: Array<Endereco>;

  static newInstance(key: string,
                     email: string,
                     senha: string,
                     telefone: string,
                     tipoCliente: string,
                     enderecos: Array<Endereco>): Cliente {
    const obj = new Cliente();
    obj.key = key;
    obj.email = email;
    obj.senha = senha;
    obj.telefone = telefone;
    obj.tipoCliente = tipoCliente;
    obj.enderecos = enderecos;
    return obj;
  }
}
