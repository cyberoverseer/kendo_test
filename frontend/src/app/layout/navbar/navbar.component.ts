import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  path: any;
  showNav: boolean;

  constructor( private router: Router, private location: Location) {
      this.path = '';
      this.showNav = true;
      this.router.events.subscribe((val) => {
      this.path = this.location.path();
      if (this.path === '/login' ) { this.showNav = false; }
      if (this.path === '/register') { this.showNav = false; }
      if (this.path === '/**') { this.showNav = false; }
      console.log(this.path);
   });
  }

  ngOnInit() {
  }
}
