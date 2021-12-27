import { UserProfile } from '../../models/user-profile.model';
import { CommonConstants } from '../../../shared/constants/common-constants';
import { createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile-store.actions';

export const initialProfileState: Partial<UserProfile> = {

}
const httpDataStatus = CommonConstants.HTTP_DATA_STATUS;

export const reducer = createReducer(
  initialProfileState,
  on(ProfileActions.fetchUserProfile, (state) => ({
    ...state,
    dataStatus: httpDataStatus.LOADING
  })),

  on(ProfileActions.setUserProfileSuccess, (state, { data }) => ({
    ...state,
    ...data,
    dataStatus: httpDataStatus.SUCCESS,
  })),

  on(ProfileActions.setUserProfileError, (state, { error }) => ({
    ...state,
    error: error,
    dataStatus: httpDataStatus.ERROR,
  })),

  on(ProfileActions.updateUserProfileSuccess, (state, { data }) => ({
    ...state,
    ...data,
    dataStatus: httpDataStatus.SUCCESS,
  })),

);
