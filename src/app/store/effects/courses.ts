import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, switchMap, catchError, tap, mergeMap, exhaustMap, first, take, single, audit} from 'rxjs/operators';
import {CoursesService} from '../../courses/courses-service.service';
import {CoursesActionTypes} from '../actions/courses';
import * as fromRoot from '../reducers/index';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as coursesActions from '../actions/courses';
import {LoadderService} from '../../loadder.service';

@Injectable()
export class CoursesEffects {

  constructor(private actions$: Actions,
              private coursesService: CoursesService,
              private router: Router,
              private store: Store<fromRoot.State>,
              private loader: LoadderService) {
  }

  @Effect()
  GetCoursesInfo: Observable<any> = this.actions$
    .pipe(
      ofType(CoursesActionTypes.GetCoursesInfo),
      map((action: any) => action.payload),
      switchMap((payload: any) => {
        return this.coursesService.getCourses(payload.start, payload.count)
          .pipe(
            map((response: any) => {
              this.loader.hideLoader();
              return new coursesActions.ApplyCoursesInfo(response);
            })
          );
      })
    );

  @Effect()
  DeleteCourses: Observable<any> = this.actions$
    .pipe(
      ofType(CoursesActionTypes.DeleteCourses),
      map((action: any) => action.payload),
      switchMap((id: any) => {
        return this.coursesService.removeCourse(id)
          .pipe(
            map(() => {
              return new coursesActions.GetCoursesInfo({start: 0, count: 10});
            })
          );
      })
    );
}

