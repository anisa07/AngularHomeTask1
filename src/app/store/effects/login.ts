import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, switchMap, catchError, tap, mergeMap, exhaustMap, first, take, single, audit} from 'rxjs/operators';
import {LoginService} from '../../login-page/login.service';
import {AuthActionTypes, Login, LoginSuccess} from '../actions/login';
import * as fromRoot from '../reducers/index';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as authActions from '../actions/login';
import {LoadderService} from '../../loadder.service';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private loginService: LoginService,
              private router: Router,
              private store: Store<fromRoot.State>,
              private  loader: LoadderService) {
  }

  @Effect()
  Login: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.Login),
      map((action: any) => action.payload),
      switchMap((payload: any) => {
        return this.loginService.login(payload.email, payload.password)
        .pipe(
          map((response: any) => {
            this.loginService.successfulLogin(response.token);

            return new authActions.LoginSuccess();
          }),
          catchError((error: any) => {
            return of(new authActions.LoginFailure(error));
          })
        );
      })
    );

  @Effect()
  LogOut: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    map(() => {
      const storage = window.localStorage;

      storage.clear();
      this.router.navigate(['login']);

      return new authActions.LogoutSuccess();
    })
  );

  @Effect()
  GetLoginInfo: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.GetLoginInfo),
      switchMap(() => {
        return this.loginService.getUserInfo()
          .pipe(
            map((response: any) => new authActions.LoginInfo(response))
          );
      })
    );
}

