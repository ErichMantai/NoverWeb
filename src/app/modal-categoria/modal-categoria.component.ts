import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdSnackBar} from '@angular/material';
import {ProdutoService} from '../services/produto.service';
import {Produto} from '../class/produto'
import {GenericModalComponent} from "../common/generic-modal.component";
import {Categoria} from "../class/categoria";
import {CategoriaService} from "../services/categoria.service";

@Component({
  templateUrl: './modal-categoria.component.html',
  styleUrls: ['./modal-categoria.component.css'],
  selector: 'app-modal-categoria',
  providers: [{provide: MD_DIALOG_DATA, useValue: {}}]

})
export class ModalCategoriaComponent extends GenericModalComponent<Categoria> {
  constructor(private categoriaService: CategoriaService,
              private bar: MdSnackBar,
              @Inject(MD_DIALOG_DATA) public data: any) {
    super(categoriaService, bar, data);
  }
}
