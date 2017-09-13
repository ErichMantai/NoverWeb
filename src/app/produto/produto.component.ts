import { Component, OnInit } from '@angular/core';
import { ModalProdutoComponent } from './../modal-produto/modal-produto.component';
import { Produto } from './../services/produto/produto';
import { MdDialogModule, MdDialog } from '@angular/material';
import { ProdutoService } from './../services/produto/produto.service'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  // entryComponents: [ModalProdutoComponent]
})
export class ProdutoComponent implements OnInit {


  produtos: Array<Produto> = []

  constructor(public produtoService: ProdutoService,
    public dialog: MdDialog) { }

  ngOnInit(): void {
    this.produtoService.findAll()
      .then(result => {
        this.produtos = result;
      })
  }

  openCustom() {
    this.dialog.open(ModalProdutoComponent);
  }

}
