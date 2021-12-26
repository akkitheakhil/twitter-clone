
import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import * as CoreActions from './auth-store.actions';
import { ICoreState } from '../../models/core-state.model';
import { CommonConstants } from 'src/app/shared/constants/common-constants';

export const initialCoreState: ICoreState = {
  auth: {
    isAuthenticated: false,
  },
}

const httpDataStatus = CommonConstants.HTTP_DATA_STATUS;
export const reducer = createReducer(
  initialCoreState,

  on(CoreActions.loginUserWithGoogle, (state) => ({
    ...state,
    auth: { ...state.auth, dataStatus: httpDataStatus.LOADING }
  })),

  on(CoreActions.fetchAuthInfo, (state) => ({
    ...state,
    auth: { ...state.auth, dataStatus: httpDataStatus.LOADING }
  })),

  on(CoreActions.setAuthInfoSuccess, (state, { data }) => ({
    ...state,
    auth: {
      ...state.auth,
      id: data.uid,
      displayName: data.displayName,
      email: data.email,
      isAuthenticated: true,
      dataStatus: httpDataStatus.SUCCESS,
      photoUrl: data.photoUrl
    }
  })),

  on(CoreActions.setAuthInfoError, (state, { error }) => ({
    ...state,
    auth: { ...initialCoreState.auth, dataStatus: httpDataStatus.ERROR, error }
  })),

  on(CoreActions.loginUserWithGoogleSuccess, (state, { data }) => ({
    ...state,
    auth: {
      ...state.auth,
      id: data.uid,
      displayName: data.displayName,
      email: data.email,
      isAuthenticated: true,
      dataStatus: httpDataStatus.SUCCESS,
      photoUrl: data?.photoUrl
    }
  })),

  on(CoreActions.loginUserWithGoogleError, (state, { error }) => ({
    ...state,
    auth: { ...initialCoreState.auth, dataStatus: httpDataStatus.ERROR, error }
  })),

  on(CoreActions.logoutUser, (state) => ({
    ...state,
    auth: {
      ...state.auth, dataStatus: httpDataStatus.LOADING
    }
  })),


  on(CoreActions.logoutUserSuccess, (state, { data }) => ({
    ...state,
    auth: { ...initialCoreState.auth, dataStatus: httpDataStatus.SUCCESS, }
  })),


)


