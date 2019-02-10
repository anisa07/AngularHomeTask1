import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements CanActivate {

  constructor(public router: Router, private http: HttpClient) {
  }

  login(login, password) {
    return this.http.post(`${BASE_URL}/login`, JSON.stringify({
      login,
      password,
    }));
  }

  logOut() {
    const storage = window.localStorage;

    storage.clear();
  }

  getToken() {
    const storage = window.localStorage;

    return storage.getItem('AmazingToken');
  }

  getUserInfo() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken(),
    });

    return this.http.post(`${BASE_URL}/userinfo`, JSON.stringify({}), {headers: headers});
  }

  isAuthenticated() {
    const storage = window.localStorage;

    return !!storage.getItem('AmazingToken');
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
