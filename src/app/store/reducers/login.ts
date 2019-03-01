import * as authActions from '../actions/login';
import {User} from '../../models/user';

export interface State {
  user: User;
}

export const initialState: State = {
  user: {
    login: '',
    name: {
      first: '',
      last: '',
    },
    id: 0,
  },
};

export function reducer(state = initialState, action: authActions.AuthActions): State {
  switch (action.type) {
    case authActions.AuthActionTypes.Login:
      return handleLogin(state, action);

    case authActions.AuthActionTypes.LoginSuccess:
      return handleSuccess(state, action);

    case authActions.AuthActionTypes.Logout:
      return handleLogout(state, action);

    case authActions.AuthActionTypes.LogoutSuccess:
      return handleLogoutSuccess(state, action);

    case authActions.AuthActionTypes.GetLoginInfo:
      return handleGetLoginInfo(state, action);

    case authActions.AuthActionTypes.LoginInfo:
      return handleLoginInfo(state, action);

    case authActions.AuthActionTypes.LoginFailure:
      return handleFailure(state, action);

    default:
      return state;
  }
}

function handleLogin(state: State, action: authActions.Login): State {
  return {
    ...state,
  };
}

function handleSuccess(state: State, action: authActions.LoginSuccess): State {
  return {
    ...state,
  };
}

function handleLogout(state: State, action: authActions.Logout): State {
  return {
    ...state,
  };
}

function handleLogoutSuccess(state: State, action: authActions.LogoutSuccess): State {
  return {
    user: {
      login: '',
      name: {
        first: '',
        last: '',
      },
      id: 0,
    },
  };
}

function handleFailure(state: State, action: authActions.LoginFailure): State {
  return {
    ...state,
  };
}

function handleGetLoginInfo(state: State, action: authActions.GetLoginInfo): State {
  return {
    ...state,
  };
}

function handleLoginInfo(state: State, action: authActions.LoginInfo): State {
  return {
    user: {
      login: action.payload.login,
      name: {
        first: action.payload.name.first,
        last: action.payload.name.last,
      },
      id: action.payload.id,
    },
  };
}
