import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BootstrapModalModule} from 'angular2-modal/plugins/bootstrap';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ModalModule} from 'angular2-modal';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {FirebaseConfig, ProvidersService} from './services/providers.service';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AppMaterialModule} from './app-material/app-material.module';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {routes} from './app.routes';




import {RelatorioComponent} from './relatorio/relatorio.component';
import {LoginComponent} from './login/login.component';
import {ProdutoComponent} from './produto/produto.component';
import {ClienteComponent} from './cliente/cliente.component';
import {CardapioComponent} from "./cardapio/cardapio.component";

import {ModalProdutoComponent} from './modal-produto/modal-produto.component';
import {ModalCardapioComponent} from './modal-cardapio/modal-cardapio.component'
import {ModalPedidoComponent} from "./modal-pedido/modal-pedido.component";
import {ModalCategoriaComponent} from "./modal-categoria/modal-categoria.component";
import {ModalClienteComponent} from "./modal-cliente/modal-cliente.component";
import {PedidoComponent} from "./pedido/pedido.component";

import {ProdutoService} from './services/produto.service'
import {CardapioService} from './services/cardapio.service'
import {CategoriaService} from './services/categoria.service'
import {ClienteService} from './services/cliente.service'
import {PedidoService} from './services/pedido.service'
import {CategoriaComponent} from "./categoria/categoria.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdutoComponent,
    ClienteComponent,
    RelatorioComponent,
    CardapioComponent,
    CategoriaComponent,
    PedidoComponent,
    ModalProdutoComponent,
    ModalClienteComponent,
    ModalCategoriaComponent,
    ModalPedidoComponent,
    ModalCardapioComponent
  ],
  exports: [
    AppMaterialModule
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
  providers: [ProvidersService,
    AngularFireAuth,
    ProdutoService,
    CardapioService,
    PedidoService,
    ClienteService,
    CategoriaService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalProdutoComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
