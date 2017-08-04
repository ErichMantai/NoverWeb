import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: any;
  state: String = '';
  // user: Observable<firebase.User>;

  constructor(public afAuth: ProvidersService, private router: Router) {

    // this.user.subscribe(auth => {
    //   if (auth) {
    //     this.name = auth;
    //   }
    // });

  }

  logout() {
    this.afAuth.logoutFacebook();
    this.router.navigateByUrl('login')
  }

  ngOnInit() {
  }

}
