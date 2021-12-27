import { UserProfile } from '../../models/user-profile.model';
import { createAction, props } from '@ngrx/store';

export const fetchUserProfile = createAction(
  '[CORE+PROFILE] Fetch User Profile'
);

export const setUserProfileSuccess = createAction(
  '[CORE+PROFILE] Set User Profile Success',
  props<{ data: UserProfile }>()
);

export const setUserProfileError = createAction(
  '[CORE+PROFILE] Set User Profile Error',
  props<{ error: any }>()
);



export const createProfile = createAction(
  '[CORE+PROFILE] Create User Profile',
  props<{ data: UserProfile }>()
);

export const createProfileSuccess = createAction(
  '[CORE+PROFILE] Create User Profile Success',
  props<{ data: UserProfile }>()
);

export const createProfileError = createAction(
  '[CORE+PROFILE] Create User Profile Error',
  props<{ error: any }>()
);

export const updateUserProfileSuccess = createAction(
  '[CORE+PROFILE] Update User Profile Success',
  props<{ data: UserProfile }>()
);
