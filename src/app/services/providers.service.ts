import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProvidersService {

  user: Observable<firebase.User>;

  constructor(public af: AngularFireAuth) { 
    this.user = af.authState;
  }

  loginWithFacebook() {
   return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logoutFacebook() {
    return this.af.auth.signOut();
  }
}
