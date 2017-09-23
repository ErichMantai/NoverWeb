import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdSnackBar} from '@angular/material';
import {ProdutoService} from '../services/produto.service';
import {Produto} from '../class/produto'
import {GenericModalComponent} from "../common/generic-modal.component";

@Component({
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.css'],
  selector: 'app-modal-produto',
  providers: [{provide: MD_DIALOG_DATA, useValue: {}}]

})
export class ModalProdutoComponent extends GenericModalComponent<Produto> {
  constructor(private produtoService: ProdutoService,
              private bar: MdSnackBar,
              @Inject(MD_DIALOG_DATA) public data: any) {
    super(produtoService, bar, data);
  }
}
