import { AuthService } from './../_services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  isLoginError = false;
  model: any = {};

  ngOnDestroy(): void {
    document.body.style.verticalAlign = '';
    document.body.style.display = '';
    document.body.style.height = '';
    document.documentElement.style.height = '';
    document.documentElement.style.margin = '';
    document.documentElement.style.display = '';
    location.reload();
  }

  constructor(private router: Router, private authService: AuthService) {
    document.body.style.verticalAlign = 'middle';
    document.body.style.display = 'table-cell';
    document.body.style.height = '100%';
    document.documentElement.style.height = '100%';
    document.documentElement.style.margin = 'auto';
    document.documentElement.style.display = 'table';

  }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['']);
   }

  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      console.log('Logged in successfuly');
      this.router.navigate(['']);
    }, error => {
      console.log('Logged in failed');
      this.model.username = '';
      this.model.password = '';
    });
  }
}
