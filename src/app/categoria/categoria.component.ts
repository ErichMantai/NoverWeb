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
import {Categoria} from "../class/categoria";
import {CategoriaService} from "../services/categoria.service";
import {ModalCategoriaComponent} from "../modal-categoria/modal-categoria.component";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent extends GenericComponent<Categoria> {
  constructor(public categoriaService: CategoriaService,
              public dialog: MdDialog) {
    super(categoriaService, dialog);
    this.usesModal(ModalCategoriaComponent)
    this.columns = [
      {label: 'Descrição', field: 'descricao'},
      {label: 'Ações', field: 'acoes', noValue: true}
    ];
    this.modalConfig = {
      width: '280px'
    }
  }
}
