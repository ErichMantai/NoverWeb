import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { MdDialogModule, MdDialogRef } from '@angular/material';
import { ProdutoService } from './../services/produto/produto.service';
import { Produto } from './../services/produto/produto'

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    templateUrl: './modal-produto.component.html',
    styleUrls: ['./modal-produto.component.css'],
    selector: 'app-modal-produto',
    providers: []

})

export class ModalProdutoComponent {

    lista: FirebaseListObservable<any>;
    produto: Produto;

    constructor(public Af: AngularFireDatabase,
        public dialogRef: MdDialogRef<ModalProdutoComponent>,
        private produtoService: ProdutoService) {
        this.lista = this.Af.list('/produtos');
        this.produto = new Produto();
        this.produtoService.findAll();
    }
    postProduto() {
        this.produtoService.insert(this.produto)
            .then(result => {
                console.log("saved", result)
            })

    }


}
