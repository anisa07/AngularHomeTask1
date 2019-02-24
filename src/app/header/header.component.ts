import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {interval} from 'rxjs';
import {flatMap, timeInterval} from 'rxjs/operators';
import {LoginService} from '../login-page/login.service';
import {CrumbsService} from '../crumbs.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/reducers/index';
import * as authActions from '../store/actions/login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  login: string;

  constructor(private loginService: LoginService, private router: Router,
              private crumbsService: CrumbsService,
              private store: Store<fromRoot.State>) {}

  logOut() {
    this.login = '';
    this.crumbsService.removeCrumbs();
    // this.loginService.logOut();
    this.store.dispatch(new authActions.Logout());
  }

  ngOnInit() {
    this.store.subscribe((data: any) => {
      if (data && data.auth) {
        this.login = data.auth.user.login;
      }
    });
  }
}
