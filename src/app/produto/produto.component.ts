import { Component, OnInit } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ModalProdutoComponent } from './../modal-produto/modal-produto.component';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [Modal]
})
export class ProdutoComponent implements OnInit {

  constructor(public modal: Modal) { }

  ngOnInit() {
  }
  openCustom() {
    return this.modal.open(ModalProdutoComponent, overlayConfigFactory({}, BSModalContext));
  }

}
