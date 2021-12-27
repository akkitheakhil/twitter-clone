import { createAction, props } from '@ngrx/store';

export const fetchAuthInfo = createAction(
  '[CORE+AUTH] Get Authenticated UserInfo'
);

export const setAuthInfoSuccess = createAction(
  '[CORE+AUTH] Set Auth UserInfo Success',
  props<{ data: any }>()
);

export const setAuthInfoError = createAction(
  '[CORE+AUTH] Set Auth UserInfo Fail',
  props<{ error: any }>()
);

export const loginUserWithGoogle = createAction(
  '[CORE+AUTH] Login User With Google'
);

export const loginUserWithGoogleSuccess = createAction(
  '[CORE+AUTH] Login User With Google Success',
  props<{ data: any }>()
);

export const loginUserWithGoogleError = createAction(
  '[CORE+AUTH] Login User With Google Error',
  props<{ error: any }>()
);

export const logoutUser = createAction(
  '[CORE+AUTH] Logout User'
);

export const logoutUserSuccess = createAction(
  '[CORE+AUTH] Logout User Success',
  props<{ data: any }>()
);

export const logoutUserError = createAction(
  '[CORE+AUTH] Logout User Error',
  props<{ error: any }>()
);
