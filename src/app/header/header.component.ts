import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {interval} from 'rxjs';
import {flatMap, timeInterval} from 'rxjs/operators';
import {LoginService} from '../login-page/login.service';
import {CrumbsService} from '../crumbs.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  login: string;

  constructor(private loginService: LoginService, private router: Router, private crumbsService: CrumbsService) {
  }

  logOut() {
    this.loginService.logOut();
    this.crumbsService.removeCrumbs();
    this.login = '';
    this.router.navigate(['login']);
  }

  ngOnInit() {
    interval(5000)
      .pipe(timeInterval(), flatMap((value: any) => this.loginService.getUserInfo()))
      .subscribe((data: any) => {
        this.login = data.login;
      });
  }
}
