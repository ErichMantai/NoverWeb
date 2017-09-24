import { Component } from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { GenericComponent } from './../common/generic.component'
import { Produto } from '../class/produto'
import { ProdutoService } from "../services/produto.service";
import { MdDialog } from "@angular/material/dialog";
import { ModalProdutoComponent } from "../modal-produto/modal-produto.component";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent extends GenericComponent<Produto> {
  constructor(public produtoService: ProdutoService,
    public dialog: MdDialog) {
    super(produtoService, dialog)
    this.usesModal(ModalProdutoComponent)
    this.columns = [
      { label: 'Cardápio', field: 'cardapio.descricao' },
      { label: 'Descrição', field: 'descricao' },
      { label: 'Valor', field: 'valor' },
      { label: 'Promoção', field: 'promocao' },
      { label: 'Ações', field: 'acoes', noValue: true }
    ];
    this.modalConfig = {
      height: '250px'
    }
  }
}
