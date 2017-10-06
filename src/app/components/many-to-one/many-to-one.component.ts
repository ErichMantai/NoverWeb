import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MdAutocomplete } from '@angular/material';

@Component({
  selector: 'app-many-to-one',
  templateUrl: './many-to-one.component.html',
  styleUrls: ['./many-to-one.component.css']
})
export class ManyToOneComponent implements OnInit, OnChanges {

  @ViewChild('auto') mdAutocomplete: MdAutocomplete;
  @Input("values") values: any;
  @Input("field") field: any = "descricao";
  @Input("placeholder") placeholder: any = "Placeholder";
  stateCtrl: FormControl;
  filteredValues: Observable<any[]>;

  _selected: any;

  @Input() get selected() {
    return this._selected;
  }

  set selected(selected: any) {
    this._selected = selected;
  }

  @Output() selectedChange: EventEmitter<any>;
  constructor() {
    this.stateCtrl = new FormControl();
    this.selectedChange = new EventEmitter();
  }

  ngOnInit() {
    if (this.selected) {
      this.stateCtrl.setValue(this.selected[this.field])
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes.values) {
        this.values = changes.values.currentValue;
        this.filteredValues = this.stateCtrl.valueChanges
          .startWith(null)
          .map(value => {
            if (this.selected && this.selected[this.field] != value) {
              this.selected = null;
            }
            // console.log(value, "---- ", this.values, this.values.slice())
            return value ? this.filterValues(value) : this.values.slice()
          });
      }
      if (changes.selected) {
        this._selected = changes.selected.currentValue;
      }
      
    }
  }

  filterValues(filterValue: any, field?:string) {
    let values = this.values.filter(value =>
      value[field || this.field].toLowerCase().indexOf(filterValue.toLowerCase()) === 0);
    return values;
  }

  selectValue(selected: any) {
    this._selected = selected
    this.selectedChange.emit(this.selected)
  }

  keyup(event) {
    this.selectValue(null);
  }

}
