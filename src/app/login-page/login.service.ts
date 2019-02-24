import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoadderService} from '../loadder.service';

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements CanActivate {

  constructor(public router: Router, private http: HttpClient, private  loader: LoadderService) {
  }

  login(login, password) {
    return this.http.post(`${BASE_URL}/login`, JSON.stringify({
      login,
      password,
    }));
  }

  logOut() {
    console.log('here')
    const storage = window.localStorage;

    storage.clear();
    return this.router.navigate(['login']);
  }

  successfulLogin(token) {
    this.loader.hideLoader();

    const storage = window.localStorage;
    storage.setItem('AmazingToken', token);
    this.router.navigate(['courses']);
  }

  loginFailure(error) {
    this.loader.hideLoader();
    console.log(error);
  }

  getToken() {
    const storage = window.localStorage;

    return storage.getItem('AmazingToken');
  }

  getUserInfo() {
    if (this.getToken()) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getToken(),
      });

      return this.http.post(`${BASE_URL}/userinfo`, JSON.stringify({}), {headers: headers});
    }
    return from(new Promise(resolve => resolve({})));
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  canActivate() {
    return from(new Promise(resolve => resolve(this.isAuthenticated()))).pipe(
      map(e => {
        if (e) {
          return true;
        }
        this.router.navigate(['login']);
        return false;
      })
    );
  }
}

