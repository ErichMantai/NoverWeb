import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-one-to-many',
  templateUrl: './one-to-many.component.html',
  styleUrls: ['./one-to-many.component.css']
})
export class OneToManyComponent implements OnInit, OnChanges {
  _toAdd: any = {};
  _values: Array<any>;
  _valuesChange: EventEmitter<any>;
  _toAddChange: EventEmitter<any>;
  @Input() title: string;
  @Input() description: string;
  @Input() inputs: Array<any>;

  @Input()
  get values() {
    return this._values
  }

  set values(values: any) {
    this._values = values
  }

  @Input()
  get toAdd(): any {
    return this._toAdd;
  }

  set toAdd(value: any) {
    this._toAdd = value;
  }

  @Output()
  get toAddChange(): EventEmitter<any> {
    return this._toAddChange;
  }

  set toAddChange(value: EventEmitter<any>) {
    this._toAddChange = value;
  }

  @Output()
  get valuesChange(): EventEmitter<any> {
    return this._valuesChange;
  }

  set valuesChange(value: EventEmitter<any>) {
    this._valuesChange = value;
  }


  constructor() {
    this._valuesChange = new EventEmitter();
    this._toAddChange = new EventEmitter()
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.values) {
      this.values = []
    }
  }

  add(toAdd) {
    this.values.push(toAdd);
    this.toAddChange.emit(toAdd);
    this.valuesChange.emit(this.values)
    this.toAdd = {}
  }

  edit(value) {
    this._toAdd = value;
  }

  find(value) {
    return this.values.indexOf(value)
  }

  delete(value) {
    this.values.splice(this.find(value), 1)
  }

  getField(obj: any, field: string, str?: Array<string>) {
    let toStr = field ? field.split(".") : []
    if (toStr.length > 1) {
      str = toStr
    }
    if (str && str.length > 1) {
      field = str[0]
      let nextField = str[1]
      str.splice(0, 1)
      return this.getField(obj[field], nextField, str)
    } else {
      return obj ? obj[field] : obj
    }
  }

}
