import { createReducer, on } from '@ngrx/store';
import { UserActionTypes, UserActions } from './user.actions';
import { state } from '@angular/animations';

export const userFeatureKey = 'usersState';

export interface State {
  user: any[];
  error: string;
}

export const initialState: State = {
  user: [],
  error: '',
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return {
        ...state,
      };
    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        user: action.payload.data,
        error: '',
      };
    case UserActionTypes.LoadUsersFailure:
      return {
        ...state,
        user: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}
