import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { PedidoComponent } from './pedido/pedido.component';
export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: '**', redirectTo: 'login', pathMatch: 'full' },
    { path: 'pedido', component: PedidoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'produto', component: ProdutoComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'relatorio', component: RelatorioComponent }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
