import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdSnackBar} from '@angular/material';
import {GenericModalComponent} from "../common/generic-modal.component";
import {ClienteService} from "../services/cliente.service";
import {Cliente} from "../class/cliente";

@Component({
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css'],
  selector: 'app-modal-cliente',
  providers: [{provide: MD_DIALOG_DATA, useValue: {}}]

})
export class ModalClienteComponent extends GenericModalComponent<Cliente> {
  constructor(private clienteService: ClienteService,
              private bar: MdSnackBar,
              @Inject(MD_DIALOG_DATA) public data: any) {
    super(clienteService, bar, data);
  }
}
