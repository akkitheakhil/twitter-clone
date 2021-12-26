import { isEmptyData } from '../../shared/utils/common.utils';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CoreActions from '../store/auth/auth-store.actions';
import * as CoreSelectors from '../store/auth/auth-store.selectors';
import { IAuth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class CoreFacadeService {

  constructor(private store: Store<any>) { }

  callLoginWithGoogle() {
    this.store.dispatch(CoreActions.loginUserWithGoogle());
  }

  getUserAuthInfo() {
    this.store.dispatch(CoreActions.fetchAuthInfo());
  }

  getCurrentUserInfo() {
    return this.store.select(CoreSelectors.selectAuthInfo);
  }

  isValidUser(user: IAuth) {
    return !isEmptyData(user?.id);
  }

  logoutUser() {
    this.store.dispatch(CoreActions.logoutUser());
  }

}
