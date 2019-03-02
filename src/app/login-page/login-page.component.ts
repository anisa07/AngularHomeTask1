import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {LoginService} from './login.service';
import * as fromRoot from '../store/reducers/index';
import * as authActions from '../store/actions/login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;

  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(private loginService: LoginService,
              private router: Router,
              private store: Store<fromRoot.State>,
              fb: FormBuilder) {
    this.form = fb.group({
      'email': this.email,
      'password': this.password,
    });
  }

  ngOnInit() {
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(['courses']);
    }
  }

  login() {
    this.store.dispatch(new authActions.Login({email: this.email.value, password: this.password.value}));
  }
}
