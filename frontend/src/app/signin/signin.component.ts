import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  isLoginError = false;
  model: any = {};

  constructor(private router: Router, private authService: AuthService) {
    document.body.style.verticalAlign = 'middle';
    document.body.style.display = 'table-cell';
    document.body.style.height = '100%';
    document.documentElement.style.height = '100%';
    document.documentElement.style.margin = 'auto';
    document.documentElement.style.display = 'table';

  }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      console.log('Logged in successfuly');
    }, error => {
      console.log('Logged in failed');
    });
  }
}
