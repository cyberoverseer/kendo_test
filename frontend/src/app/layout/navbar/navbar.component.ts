import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  path = '';

  constructor( private router: Router, private location: Location) {
      this.router.events.subscribe((val) => {
      this.path = this.location.path();
   });
  }
}
