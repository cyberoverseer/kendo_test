import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() {
    document.body.style.verticalAlign = 'middle';
    document.body.style.display = 'table-cell';
    document.body.style.height = '100%';
    document.documentElement.style.height = '100%';
    document.documentElement.style.margin = 'auto';
    document.documentElement.style.display = 'table';
  }

  ngOnInit() {
  }

}
