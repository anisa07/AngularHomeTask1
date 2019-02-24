import { ActionReducerMap, createSelector, createFeatureSelector,
  ActionReducer, MetaReducer } from '@ngrx/store';
import * as login from './login';

export interface State {
  auth: login.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: login.reducer,
};

// export function logger(reducer: ActionReducer<State>):
//   ActionReducer<State> {
//   return function (state: State, action: any): State {
//     console.log('state', state);
//     console.log('action', action);
//     return reducer(state, action);
//   };
// }
//
// export const metaReducers: MetaReducer<State>[] = [logger];
