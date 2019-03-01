import { ActionReducerMap, createSelector, createFeatureSelector,
  ActionReducer, MetaReducer } from '@ngrx/store';
import * as login from './login';
import * as courses from './courses';

export interface State {
  auth: login.State;
  courses: courses.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: login.reducer,
  courses: courses.reducer,
};
