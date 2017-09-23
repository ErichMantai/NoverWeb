import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalProdutoComponent } from './../modal-produto/modal-produto.component';
import { Produto } from './../services/produto/produto';
import {DataSource} from '@angular/cdk/collections';
import {MdSort, MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { ProdutoService } from './../services/produto/produto.service'


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export class Database {
  dataChange: BehaviorSubject<Produto[]> = new BehaviorSubject<Produto[]>([]);
  get data(): Produto[] { return this.dataChange.value; }

  constructor() {}

  addProduto(produto: Produto) {
    const copiedData = this.data.slice();
    copiedData.push(produto);
    this.dataChange.next(copiedData);
  }

  addAll(produtos: Array<Produto>) {
    this.dataChange.value.splice(0, this.dataChange.value.length)
    if (produtos) {
      produtos.forEach(produto => {
        this.addProduto(produto)
      })
    }
  }

  delete(produto: Produto) {
    const index = this.dataChange.value.indexOf(produto)
    const values = this.dataChange.value
    values.splice(index, 1)
    this.dataChange.next(values)
  }

}

export class ProdutoDatasource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */

  constructor(private _database: Database, private _paginator: MdPaginator) {
    super();
  }

  connect(): Observable<Produto[]> {
    const displayDataChanges = [
      this._database.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const toReturn = this._database.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return toReturn.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {

  displayedColumns = ['descricao', 'valor', 'promocao', 'acoes'];
  database = new Database();
  dataSource: ProdutoDatasource | null;


  produtos: Array<Produto> = []
  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(public produtoService: ProdutoService,
    public dialog: MdDialog) {
  }

  ngOnInit() {
    this.dataSource = new ProdutoDatasource(this.database, this.paginator);
    this.dialog.afterAllClosed.subscribe(() => {
      this.produtoService.findAll()
      .then(result => {
          this.database.addAll(result)
          this.produtos = result;
        })
      })
  }

  modal(produto: Produto) {
    const dialogRef = this.dialog.open(ModalProdutoComponent, {
     height: '400px',
     width: '600px',
     data: produto
    });
    dialogRef.componentInstance.produto = produto
  }

  delete(produto: Produto) {
    this.produtoService.delete(produto)
      .then(result => {
        this.database.delete(produto)
      })
  }
}
