import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { MdDialog, MD_DIALOG_DATA } from '@angular/material';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class Produtoclass {
    $key: string;
    descricao: string;
    valorunitario: string;
    promocao: boolean;
}

@Component({
    templateUrl: './modal-produto.component.html',
    styleUrls: ['./modal-produto.component.css'],
    selector: 'app-modal-produto',
    providers: []
})


export class ModalProdutoComponent {

    lista: FirebaseListObservable<any>;
    produto: Produtoclass;

    constructor(public Af: AngularFireDatabase, public dialog: MdDialog) {
        this.lista = this.Af.list('/produtos');
        this.produto = new Produtoclass();
    }

    postProduto() {
        this.lista.push(this.produto).then(() => {
            this.produto = new Produtoclass();
        });
    }

}
