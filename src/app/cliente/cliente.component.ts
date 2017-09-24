import {Component} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {GenericComponent} from './../common/generic.component'
import {MdDialog} from "@angular/material/dialog";
import {Cliente} from "../class/cliente";
import {ClienteService} from "../services/cliente.service";
import {ModalClienteComponent} from "../modal-cliente/modal-cliente.component";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent extends GenericComponent<Cliente> {
  constructor(public clienteService: ClienteService,
              public dialog: MdDialog) {
    super(clienteService, dialog);
    this.usesModal(ModalClienteComponent);
    this.columns = [
      {label: 'E-mail', field: 'email'},
      {label: 'Telefone', field: 'telefone'},
      {label: 'Tipo Cliente', field: 'tipoCliente'},
      {label: 'Ações', field: 'acoes', noValue: true}
    ];
  }
}
