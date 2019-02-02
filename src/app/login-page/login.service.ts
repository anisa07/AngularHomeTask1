import {Injectable} from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements CanActivate {

  constructor(public router: Router) {
  }

  login(email) {
    const storage = window.localStorage;

    storage.setItem('SuperSecretLogin', email);
    storage.setItem('AmazingToken', 'FakeTokenIsHere');
  }

  logOut() {
    const storage = window.localStorage;

    storage.clear();
  }

  getUserInfo() {
    const storage = window.localStorage;

    return storage.getItem('SuperSecretLogin');
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
