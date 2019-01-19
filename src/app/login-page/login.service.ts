import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor() {
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
}
