import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdSnackBar} from '@angular/material';
import {ProdutoService} from '../services/produto.service';
import {Produto} from '../class/produto'
import {GenericModalComponent} from "../common/generic-modal.component";
import {Cardapio} from "../class/cardapio";
import {CardapioService} from "../services/cardapio.service";

@Component({
  templateUrl: './modal-cardapio.component.html',
  styleUrls: ['./modal-cardapio.component.css'],
  selector: 'app-modal-cardapio',
  providers: [{provide: MD_DIALOG_DATA, useValue: {}}]

})
export class ModalCardapioComponent extends GenericModalComponent<Cardapio> {
  constructor(private cardapioService: CardapioService,
              private bar: MdSnackBar,
              @Inject(MD_DIALOG_DATA) public data: any) {
    super(cardapioService, bar, data);
  }
}
