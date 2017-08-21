import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';



@Component({
    templateUrl: './modal-produto.component.html',
    styleUrls: ['./modal-produto.component.css'],
    selector: 'app-modal-produto'
})
export class ModalProdutoComponent {
    categorias = [
        { value: 'Gourmet-0', viewValue: 'Gourmet' },
        { value: 'Bebidas-1', viewValue: 'Bebidas' }
    ];
    constructor() {

    }

}
