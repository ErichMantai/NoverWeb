import { Component, OnInit, Inject } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { MdDialogModule, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { ProdutoService } from './../services/produto/produto.service';
import { Produto } from './../services/produto/produto'

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    templateUrl: './modal-produto.component.html',
    styleUrls: ['./modal-produto.component.css'],
    selector: 'app-modal-produto',
    providers: [{ provide: MD_DIALOG_DATA, useValue: {}}]

})

export class ModalProdutoComponent implements OnInit{

    lista: FirebaseListObservable<any>;
    produto: Produto;

    constructor(public Af: AngularFireDatabase,
        public dialogRef: MdDialogRef<ModalProdutoComponent>,
        private produtoService: ProdutoService,
        @Inject(MD_DIALOG_DATA) public data: any) {
        this.lista = this.Af.list('/produtos');
        this.produtoService.findAll();
    }


    ngOnInit(): void {
        this.produto = this.produto || new Produto();
    }

    postProduto() {
        let result;
        if (this.produto.$key) {
            result = this.produtoService.update(this.produto)
        } else {
            result = this.produtoService.insert(this.produto)
        }
        result.then(result => {
            console.log("saved", result)
        })

    }


}
