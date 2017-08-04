import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent  },
    { path: 'login', component: LoginComponent },

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
