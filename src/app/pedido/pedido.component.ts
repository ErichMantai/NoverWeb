import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
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

  ngOnInit() {
  }

}
