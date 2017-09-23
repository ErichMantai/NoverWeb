import {Component} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {GenericComponent} from './../common/generic.component'
import {MdDialog} from "@angular/material/dialog";
import {Categoria} from "../class/categoria";
import {ModalCategoriaComponent} from "app/modal-categoria/modal-categoria.component";
import {CategoriaService} from "../services/categoria.service";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent extends GenericComponent<Categoria> {
  constructor(public categoriaService: CategoriaService,
              public dialog: MdDialog) {
    super(categoriaService, dialog)
    this.usesModal(ModalCategoriaComponent)
  }
}
