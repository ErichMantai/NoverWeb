import {GenericClass} from '../common/generic.class'

export class Endereco extends GenericClass {
  logradouro: string;
  longitude: boolean;
  latitude: string;
  cep: string;
  numero: string;
  bairro: string;


  static newInstance(key: string, logradouro: string, longitude: boolean, latitude: string, cep: string, numero: string, bairro: string): Endereco {
    const obj = new Endereco();
    obj.key = key;
    obj.logradouro = logradouro;
    obj.longitude = longitude;
    obj.latitude = latitude;
    obj.cep = cep;
    obj.numero = numero;
    obj.bairro = bairro;
    return obj;
  }
}
