import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule,
  MatSidenavModule,
  MatToolbarModule,
  MD_PLACEHOLDER_GLOBAL_OPTIONS,
  MdAutocompleteModule,
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdPaginatorModule,
  MdSelectModule,
  MdSnackBarModule,
  MdTableModule,
} from '@angular/material';

@NgModule({
  exports: [
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
    MdTableModule,
    MdPaginatorModule,
    MdSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatAutocompleteModule

  ],
  providers: [
    {provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ]
})
export class AppMaterialModule {
}
