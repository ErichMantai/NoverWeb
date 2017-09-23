import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GenericService} from '../common/generic.service'
import {Cliente} from "../class/cliente";

@Injectable()
export class ClienteService extends GenericService<Cliente> {
  constructor(public http: Http) {
    super(http);
    this.setModuleAndType('clientes', Cliente)
  }
}
