import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdSnackBar} from '@angular/material';
import {GenericModalComponent} from "../common/generic-modal.component";
import {Pedido} from "../class/pedido";
import {PedidoService} from "../services/pedido.service";

@Component({
  templateUrl: './modal-pedido.component.html',
  styleUrls: ['./modal-pedido.component.css'],
  selector: 'app-modal-pedido',
  providers: [{provide: MD_DIALOG_DATA, useValue: {}}]

})
export class ModalPedidoComponent extends GenericModalComponent<Pedido> {
  constructor(private pedidoService: PedidoService,
              private bar: MdSnackBar,
              @Inject(MD_DIALOG_DATA) public data: any) {
    super(pedidoService, bar, data);
  }
}
