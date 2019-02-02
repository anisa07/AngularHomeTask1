import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login-page/login.service';
import {CrumbsService} from '../crumbs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private crumbsService: CrumbsService) { }

  authorized() {
    return this.loginService.isAuthenticated();
  }

  userName() {
    return this.loginService.getUserInfo();
  }

  logOut() {
    this.loginService.logOut();
    this.crumbsService.removeCrumbs();
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
