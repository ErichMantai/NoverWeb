import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ContentChild} from '@angular/core';

@Component({
  selector: 'app-one-to-many',
  templateUrl: './one-to-many.component.html',
  styleUrls: ['./one-to-many.component.css']
})
export class OneToManyComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() description: string;
  @Input() inputs: Array<any>;
  _values: Array<any>;
  @Input()
  get values() {
    return this._values
  }

  set values(values: any) {
    this._values = values
  }

  @Output() valuesChange: EventEmitter<any>;
  toAdd: any = {};

  @Input()
  get ctx() {
    return this
  };

  @Output()


  myContext = {$implicit: 'World', localSk: 'Svet'};

  constructor() {
    this.valuesChange = new EventEmitter();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.values) {
      this.values = []
    }
  }

  add() {
    this.values.push(this.toAdd)
    this.toAdd = {}
    console.log(this.toAdd)
  }

  edit(value) {
    console.log(value)
    this.toAdd = value;
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
