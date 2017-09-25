import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneToManyComponent } from './one-to-many/one-to-many.component';
import { ManyToOneComponent } from './many-to-one/many-to-one.component';
import { ManyToManyComponent } from './many-to-many/many-to-many.component';
import {AppMaterialModule} from './../app-material/app-material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[OneToManyComponent, ManyToOneComponent, ManyToManyComponent],
  declarations: [OneToManyComponent, ManyToOneComponent, ManyToManyComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class ComponentsModule { }
