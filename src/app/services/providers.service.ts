import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ProvidersService {

  constructor(public af: AngularFireAuth) { }

  loginWithFacebook() {
   return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logoutFacebook() {
    return this.af.auth.signOut();
  }
}
