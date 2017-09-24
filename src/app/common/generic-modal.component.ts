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
}
