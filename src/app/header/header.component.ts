import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login-page/login.service';
import {CrumbsService} from '../crumbs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  login: string;

  constructor(private loginService: LoginService, private router: Router, private crumbsService: CrumbsService) {}

  userName() {
    this.loginService.getUserInfo().subscribe((response: { login: string }) => {
      this.login = response.login || '';
    });
  }

  logOut() {
    this.loginService.logOut();
    this.crumbsService.removeCrumbs();
    this.login = '';
    this.router.navigate(['login']);
  }

  ngOnInit() {
    if (this.loginService.isAuthenticated()) {
      this.userName();
    }
  }

}
