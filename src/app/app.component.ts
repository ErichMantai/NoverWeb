import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProvidersService } from './services/providers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router,public afAuth: ProvidersService){}

  logout() {
    this.afAuth.logoutFacebook();
    this.router.navigateByUrl('login')
  }
}

