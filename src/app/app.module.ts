import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProvidersService } from './services/providers.service';
import { routes } from './app.routes';

export const FirebaseConfig = {
  apiKey: "AIzaSyAsKf60TwUwqcBCKg6P4em1P2X-nU9WYAE",
  authDomain: "noverfood-555f0.firebaseapp.com",
  databaseURL: "https://noverfood-555f0.firebaseio.com",
  projectId: "noverfood-555f0",
  storageBucket: "noverfood-555f0.appspot.com",
  messagingSenderId: "421498004673"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    routes
  ],
  providers: [ProvidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
