
import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import * as CoreActions from './auth-store.actions';
import { CommonConstants } from 'src/app/shared/constants/common-constants';
import { IAuth } from '../../models/auth.model';
import { isEmptyData } from 'src/app/shared/utils/common.utils';

export const initialAuthState: Partial<IAuth> = {
  isAuthenticated: false,
}

const httpDataStatus = CommonConstants.HTTP_DATA_STATUS;
export const reducer = createReducer(
  initialAuthState,

  on(CoreActions.loginUserWithGoogle, (state) => ({
    ...state,
    dataStatus: httpDataStatus.LOADING
  })),

  on(CoreActions.fetchAuthInfo, (state) => ({
    ...state,
    dataStatus: httpDataStatus.LOADING
  })),

  on(CoreActions.setAuthInfoSuccess, (state, { data }) => ({
    ...state,
    id: data.uid,
    displayName: data.displayName,
    email: data.email,
    isAuthenticated: true,
    dataStatus: httpDataStatus.SUCCESS,
    photoUrl: data.photoUrl

  })),

  on(CoreActions.setAuthInfoError, (state, { error }) => ({
    ...initialAuthState,
    dataStatus: isEmptyData(error) ? httpDataStatus.NO_DATA : httpDataStatus.ERROR,
    error
  })),

  on(CoreActions.loginUserWithGoogleSuccess, (state, { data }) => ({
    ...state,
    id: data.uid,
    displayName: data.displayName,
    email: data.email,
    isAuthenticated: true,
    dataStatus: httpDataStatus.SUCCESS,
    photoUrl: data?.photoUrl
  })),

  on(CoreActions.loginUserWithGoogleError, (state, { error }) => ({
    ...initialAuthState, dataStatus: httpDataStatus.ERROR, error
  })),

  on(CoreActions.logoutUser, (state) => ({

    ...state, dataStatus: httpDataStatus.LOADING

  })),

  on(CoreActions.logoutUserSuccess, (state, { data }) => ({
    ...initialAuthState, dataStatus: httpDataStatus.SUCCESS,
  })),



)


