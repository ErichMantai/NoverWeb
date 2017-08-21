import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, Validators} from '@angular/forms';
import { MdButtonModule, MdTableModule, MdIconModule, MdInputModule, MdCardModule,
MdCheckboxModule, MdSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
   MdButtonModule,
   MdTableModule,
   MdIconModule,
   MdInputModule,
   MdCardModule,
   MdCheckboxModule,
   MdSelectModule
  ]
})
export class AppMaterialModule { }
