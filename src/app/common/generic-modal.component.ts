import {Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdSnackBar} from '@angular/material';
import {GenericService} from "./generic.service";
import {GenericClass} from "./generic.class";

export class GenericModalComponent<T extends GenericClass> implements OnInit {
  element: any;

  constructor(private genericService: GenericService<T>,
              private snackBar: MdSnackBar,
              @Inject(MD_DIALOG_DATA) public data: any) {
    this.genericService.findAll();
  }

  ngOnInit(): void {
    this.element = this.element || {}
  }

  clazz<T extends GenericClass>(type: { new(): T; }): T {
    return new type();
  }

  post() {
    let result;
    if (this.element.key) {
      result = this.genericService.update(this.element)
    } else {
      result = this.genericService.insert(this.element)
    }
    result.then(() => {
      this.snackBar.open('Salvo com Sucesso', 'OK', {
        duration: 2000,
      });
    })
  }

  getField(obj: any, field: string, str?: Array<string>) {
    let toStr = field ? field.split(".") : []
    if (toStr.length > 1) {
      str = toStr
    }
    if (str && str.length > 1) {
      field = str[0]
      let nextField = str[1]
      str.splice(0,1)
      return this.getField(obj[field], nextField, str)
    } else {
      return obj ? obj[field] : obj
    }
  }
}
