import { Component, Inject, SimpleChanges, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import { MD_DIALOG_DATA, MdSnackBar } from '@angular/material';
import { GenericModalComponent } from "../common/generic-modal.component";
import { Pedido } from "../class/pedido";
import { PedidoService } from "../services/pedido.service";
import { ProdutoService } from 'app/services/produto.service';
import { Produto } from 'app/class/produto';
import { ClienteService } from 'app/services/cliente.service';
import { Cliente } from 'app/class/cliente';
import { StatusPedido } from 'app/class/StatusPedido';
import { ItemPedido } from 'app/class/item-pedido';

@Component({
  templateUrl: './modal-pedido.component.html',
  styleUrls: ['./modal-pedido.component.css'],
  selector: 'app-modal-pedido',
  providers: [{ provide: MD_DIALOG_DATA, useValue: {} }]

})
export class ModalPedidoComponent extends GenericModalComponent<Pedido> implements OnInit, OnChanges, AfterContentInit {
  produtos: any[] = [];
  clientes: any[] = [];
  _listStatus: StatusPedido[] = [];
  produtoSelecionado: any;
  get listStatus() {
    return Object.keys(StatusPedido).filter(st => !st.match(/[0-9]/));
  }
  constructor(private pedidoService: PedidoService,
    private produtoService: ProdutoService,
    private clienteService: ClienteService,
    private bar: MdSnackBar,
    @Inject(MD_DIALOG_DATA) public data: any) {
    super(pedidoService, bar, data);
    this.produtoService
      .findAll()
      .then(result => {
        this.produtos = result
      });
    this.clienteService
      .findAll()
      .then(result => {
        this.clientes = result
      });
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterContentInit(): void {
  }

  addProduto() {
    this.element.itens = this.element.itens || [];
    let item = new ItemPedido();
    item.produto = Object.assign({}, this.produtoSelecionado);
    this.element.itens.push(item);
    this.produtoSelecionado = null;
  } 

  deleteProduto(item) {
    this.element.itens.splice(this.element.itens.indexOf(item), 1)
  }
}
