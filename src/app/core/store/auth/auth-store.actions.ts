import { createAction, props } from '@ngrx/store';

export const fetchAuthInfo = createAction(
  '[CORE] Get Authenticated UserInfo'
);

export const setAuthInfoSuccess = createAction(
  '[CORE] Set Auth UserInfo Success',
  props<{ data: any }>()
);

export const setAuthInfoError = createAction(
  '[CORE] Set Auth UserInfo Fail',
  props<{ error: any }>()
);

export const loginUserWithGoogle = createAction(
  '[CORE] Login User With Google'
);

export const loginUserWithGoogleSuccess = createAction(
  '[CORE] Login User With Google Success',
  props<{ data: any }>()
);

export const loginUserWithGoogleError = createAction(
  '[CORE] Login User With Google Error',
  props<{ error: any }>()
);

export const logoutUser = createAction(
  '[CORE] Logout User'
);

export const logoutUserSuccess = createAction(
  '[CORE] Logout User Success',
  props<{ data: any }>()
);

export const logoutUserError = createAction(
  '[CORE] Logout User Error',
  props<{ error: any }>()
);
