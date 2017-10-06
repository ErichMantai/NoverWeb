import {Component} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {GenericComponent} from './../common/generic.component'
import {MdDialog} from "@angular/material/dialog";
import {ModalPedidoComponent} from "../modal-pedido/modal-pedido.component";
import {Pedido} from "../class/pedido";
import {PedidoService} from "../services/pedido.service";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent extends GenericComponent<Pedido> {
  constructor(public pedidoService: PedidoService,
              public dialog: MdDialog) {
    super(pedidoService, dialog);
    this.usesModal(ModalPedidoComponent);
    this.columns = [
      {label: 'Data', field: 'data'},
      {label: 'Status', field: 'status'},
      {label: 'Ações', field: 'acoes', noValue: true}
    ];
    this.modalConfig = {
      height: '550px'
    }
  }
}
