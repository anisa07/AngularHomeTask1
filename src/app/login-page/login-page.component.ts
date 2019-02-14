import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(['courses']);
    }
  }

  login() {
    this.loginService.login(this.email, this.password).subscribe((response: {token: string}) => {
        const storage = window.localStorage;

        storage.setItem('SuperSecretLogin', this.email);
        storage.setItem('AmazingToken', response.token);
        this.router.navigate(['courses']);
      },
      error => {
        console.log('Error', error);
      });
  }

  loginEnable() {
    return !!this.email && !!this.password;
  }

}
