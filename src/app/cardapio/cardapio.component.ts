import {Component} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {GenericComponent} from './../common/generic.component'
import {MdDialog} from "@angular/material/dialog";
import {ModalCardapioComponent} from "../modal-cardapio/modal-cardapio.component";
import {Cardapio} from "../class/cardapio";
import {CardapioService} from "../services/cardapio.service";

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent extends GenericComponent<Cardapio> {
  constructor(public categoriaService: CardapioService,
              public dialog: MdDialog) {
    super(categoriaService, dialog);
    this.usesModal(ModalCardapioComponent)
  }
}
