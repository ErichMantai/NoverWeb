import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ProvidersService} from './services/providers.service';
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild("sidenav") sidenav: MdSidenav;
  isLaunched = false;
  fillerContent = Array(30);
  fixed = false;
  coverHeader = false;
  showHeader = false;
  showFooter = false;
  modeIndex = 0;
  get mode() { return ['side', 'over', 'push'][this.modeIndex]; }
  get fixedTop() { return this.fixed && this.showHeader && !this.coverHeader ? 64 : 0; }
  get fixedBottom() { return this.fixed && this.showFooter && !this.coverHeader ? 64 : 0; }

  constructor(private router: Router, public afAuth: ProvidersService) {
  }

  ngOnInit(): void {
    console.log(this.sidenav)
  }

  logout() {
    this.afAuth.logoutFacebook();
    this.router.navigateByUrl('login')
  }

  openMenu() {
    this.sidenav.toggle();
  }
}

