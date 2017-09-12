import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { AppMaterialModule } from './app-material/app-material.module';
import { MdButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ModalModule } from 'angular2-modal';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProvidersService } from './services/providers.service';
import { routes } from './app.routes';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { ProdutoComponent } from './produto/produto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ModalProdutoComponent } from './modal-produto/modal-produto.component';
import { FormsModule } from '@angular/forms';

export const FirebaseConfig = {
  apiKey: 'AIzaSyAsKf60TwUwqcBCKg6P4em1P2X-nU9WYAE',
  authDomain: 'noverfood-555f0.firebaseapp.com',
  databaseURL: 'https://noverfood-555f0.firebaseio.com',
  projectId: 'noverfood-555f0',
  storageBucket: 'noverfood-555f0.appspot.com',
  messagingSenderId: '421498004673'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdutoComponent,
    ClienteComponent,
    RelatorioComponent,
    PedidoComponent,
    ModalProdutoComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routes,
    FormsModule
  ],
  providers: [ProvidersService, AngularFireAuth],
  bootstrap: [AppComponent],
  entryComponents: [ModalProdutoComponent]
})
export class AppModule { }
