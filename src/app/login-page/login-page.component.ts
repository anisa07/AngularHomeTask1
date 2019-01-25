import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(['content']);
    }
  }

  login() {
    this.loginService.login(this.email);
    console.log('logged in successfully');
    this.router.navigate(['content']);
  }

  loginEnable() {
    return !!this.email && !!this.password;
  }

}
