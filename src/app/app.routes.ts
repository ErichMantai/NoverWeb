import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProdutoComponent} from './produto/produto.component';
import {ClienteComponent} from './cliente/cliente.component';
import {RelatorioComponent} from './relatorio/relatorio.component';
import {PedidoComponent} from "./pedido/pedido.component";
import {CategoriaComponent} from "./categoria/categoria.component";
import {CardapioComponent} from "./cardapio/cardapio.component";
// ng build -prod --aot=false
export const router: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // { path: '**', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'pedido', component: PedidoComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'cardapio', component: CardapioComponent},
  {path: 'relatorio', component: RelatorioComponent}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
