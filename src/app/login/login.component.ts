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
      console.log(auth)
        this.router.navigateByUrl('/produto');
      }
    });
  }

  loginFb() {
    this.afAuth.loginWithFacebook().then((data) => {
      document.body.style.background = "white";
      this.router.navigate(['pedido']);
    })
  }

  ngOnInit() {
    console.log(document.body)
    document.body.style.background = "url(assets/img/blue-material-design-ultra-hd-wallpapers.png)"
    document.body.style.backgroundSize = 'cover';
  }
}
