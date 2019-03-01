import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import {LoginService} from './login.service';
import * as fromRoot from '../store/reducers/index';
import * as authActions from '../store/actions/login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;

  constructor(private loginService: LoginService, private router: Router, private store: Store<fromRoot.State>) {}

  ngOnInit() {
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(['courses']);
    }
  }

  login() {
    this.store.dispatch(new authActions.Login({email: this.email, password: this.password}));
  }

  loginEnable() {
    return !!this.email && !!this.password;
  }

}
