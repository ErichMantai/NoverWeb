import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import {
  MdButtonModule, MdTableModule, MdIconModule, MdInputModule, MdCardModule,
  MdCheckboxModule, MdSelectModule, MdDialogModule, MdDialog,
  MD_PLACEHOLDER_GLOBAL_OPTIONS, MdRadioModule, MaterialModule, MdCoreModule,
  MdAutocompleteModule, PlatformModule, MdTable
} from '@angular/material';

@NgModule({
  exports: [
    MaterialModule,
    MdCoreModule,
    MdAutocompleteModule,
    CommonModule,
    MdButtonModule,
    MdTableModule,
    MdIconModule,
    MdInputModule,
    MdCardModule,
    MdCheckboxModule,
    MdSelectModule,
    MdDialogModule,
    MdTableModule
  ],
  imports: [
    MaterialModule,
    MdCoreModule,
    MdAutocompleteModule,
    CommonModule,
    MdButtonModule,
    MdTableModule,
    MdIconModule,
    MdInputModule,
    MdCardModule,
    MdCheckboxModule,
    MdSelectModule,
    MdDialogModule
  ],
  providers: [
    { provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' } }
  ]
})
export class AppMaterialModule { }
