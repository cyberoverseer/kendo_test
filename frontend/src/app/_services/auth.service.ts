import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  baseUrl = 'http://localhost:5000/api/users';
  userToken: any;

constructor( private http: Http, private router: Router) { }

login(model: any) {
  const headers = new Headers({'Content-type': 'application/json'});
  const options = new RequestOptions({headers: headers});
  return this.http.post(this.baseUrl + '/login', model, options).map((response: Response) => {
    const user = response.json();
    if (user) {
      localStorage.setItem('token', user.tokenString);
      this.userToken = user.tokenString;
    }
  });
}

isLoggedIn() {
  if (localStorage.getItem('token')) {
    // logged in so return true
    return true;
}
}

}
