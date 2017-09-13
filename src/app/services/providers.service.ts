import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

export const FirebaseConfig = {
  apiKey: 'AIzaSyAsKf60TwUwqcBCKg6P4em1P2X-nU9WYAE',
  authDomain: 'noverfood-555f0.firebaseapp.com',
  databaseURL: 'https://noverfood-555f0.firebaseio.com',
  projectId: 'noverfood-555f0',
  storageBucket: 'noverfood-555f0.appspot.com',
  messagingSenderId: '421498004673'
};

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
