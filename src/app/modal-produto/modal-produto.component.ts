import { Component, Inject, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import {MD_DIALOG_DATA, MdAutocomplete, MdSnackBar} from '@angular/material';
import {ProdutoService} from '../services/produto.service';
import {Produto} from '../class/produto'
import {GenericModalComponent} from "../common/generic-modal.component";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {CardapioService} from "../services/cardapio.service";
import {Cardapio} from "../class/cardapio";

@Component({
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.css'],
  selector: 'app-modal-produto',
  providers: [{provide: MD_DIALOG_DATA, useValue: {}}]

})
export class ModalProdutoComponent extends GenericModalComponent<Produto> implements OnInit, OnChanges{
  cardapios: any[] = [];
  cardapio: Cardapio;

  constructor(private produtoService: ProdutoService,
              private bar: MdSnackBar,
              private cardapioService: CardapioService,
              @Inject(MD_DIALOG_DATA) public data: any) {
    super(produtoService, bar, data);
    
    this.cardapioService
      .findAll()
      .then(result => {
        this.cardapios = result
      });
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
