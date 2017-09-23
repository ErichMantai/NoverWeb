import {OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MdDialog, MdDialogConfig, MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {GenericClass} from './generic.class'
import {GenericService} from './generic.service';
import {ComponentType} from '@angular/cdk/portal';

export class Database<T extends GenericClass> {
  dataChange: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  get data(): T[] {
    return this.dataChange.value;
  }

  constructor() {
  }

  add(obj: T) {
    const copiedData = this.data.slice();
    copiedData.push(obj);
    this.dataChange.next(copiedData);
  }

  addAll(objs: Array<T>) {
    this.dataChange.value.splice(0, this.dataChange.value.length);
    if (objs) {
      objs.forEach(obj => {
        this.add(obj)
      })
    }
  }

  delete(obj: T) {
    const index = this.dataChange.value.indexOf(obj);
    const values = this.dataChange.value
    values.splice(index, 1)
    this.dataChange.next(values)
  }

}

export class Datasource<T extends GenericClass> extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */

  constructor(private _database: Database<T>, private _paginator: MdPaginator) {
    super();
  }

  connect(): Observable<T[]> {
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

  disconnect() {
  }
}

export class GenericComponent<T extends GenericClass> implements OnInit {

  displayedColumns = ['descricao', 'valor', 'promocao', 'acoes'];
  database = new Database<T>();
  dataSource: Datasource<T> | null;
  modalComponent: ComponentType<T> | TemplateRef<T>;
  modalConfig: MdDialogConfig;


  elements: Array<T> = []
  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(public genericService: GenericService<T>,
              public dialog: MdDialog) {
  }

  ngOnInit() {
    this.dataSource = new Datasource<T>(this.database, this.paginator);
    this.dialog.afterAllClosed.subscribe(() => {
      this.genericService.findAll()
        .then(result => {
          this.database.addAll(result)
          this.elements = result;
        })
    })
  }

  delete(element: T) {
    this.genericService.delete(element)
      .then(result => {
        this.database.delete(element)
      })
  }

  modal(element: T) {
    if (this.modalComponent) {
      const dialogRef = this.dialog.open(this.modalComponent, this.modalConfig || {
        height: '200px',
        width: '600px',
        data: element
      });
      dialogRef.componentInstance['element'] = element
    } else {
      console.warn('ModalComponent is not using. Use the function usesModal.')
    }
  }

  usesModal(modalComponent: any) {
    this.modalComponent = modalComponent;
  }
}
