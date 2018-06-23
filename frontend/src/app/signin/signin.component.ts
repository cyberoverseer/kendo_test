import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  isLoginError = false;
  constructor(private userService: UserService, private router: Router) {
    document.body.style.verticalAlign = 'middle';
    document.body.style.display = 'table-cell';
    document.body.style.height = '100%';
    document.documentElement.style.height = '100%';
    document.documentElement.style.margin = 'auto';
    document.documentElement.style.display = 'table';

  }

  ngOnInit() {

  }


  OnSubmit(userName, password) {
     this.userService.userAuthentication(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.router.navigate(['/home']);
    },
    (err: HttpErrorResponse) => {
      this.isLoginError = true;
    });
  }

}
