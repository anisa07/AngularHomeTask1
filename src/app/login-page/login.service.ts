import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {from} from 'rxjs';
import {map, finalize} from 'rxjs/operators';
import {LoadderService} from '../loadder.service';

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements CanActivate {

  constructor(public router: Router, private http: HttpClient, private  loadder: LoadderService) {
  }

  login(login, password) {
    this.loadder.showLoader();
    return from(this.http.post(`${BASE_URL}/login`, JSON.stringify({
      login,
      password,
    }))).pipe(finalize(() => {this.loadder.hideLoader(); }));
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
    if (this.getToken()) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getToken(),
      });

      return this.http.post(`${BASE_URL}/userinfo`, JSON.stringify({}), {headers: headers});
    }
    return Promise.resolve({});
  }

  isAuthenticated() {
    const storage = window.localStorage;

    return !!storage.getItem('AmazingToken');
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

