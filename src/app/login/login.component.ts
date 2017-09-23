import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  error: any;
  user: Observable<firebase.User>;


  constructor(public afAuth: ProvidersService, private router: Router, public af: AngularFireAuth) {
    this.user = af.authState
    this.user.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/produto');
      }
    });
  }

  loginFb() {
    this.afAuth.loginWithFacebook().then((data) => {
      //TODO pedido
      this.router.navigate(['produto']);
    })
  }

  ngOnInit() {
  }
}
