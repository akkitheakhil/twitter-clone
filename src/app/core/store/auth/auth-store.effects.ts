import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CoreActions from './auth-store.actions';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

import { Router } from '@angular/router';


@Injectable()
export class CoreStoreEffect {

  loadAuthUser$ = createEffect((): any => this.actions$.pipe(
    ofType(CoreActions.fetchAuthInfo),
    switchMap(() => {
      return this.firebaseService.getFirebaseUserState();
    }),
    map((firebaseUser) => {
      const user = firebaseUser;
      if (user) {
        return CoreActions.setAuthInfoSuccess({
          data: this.firebaseService.extractFireBaseUserInfo(user)
        })
      } else {
        return CoreActions.setAuthInfoError({
          error: null
        })
      }
    }),
    catchError(error => of(CoreActions.loginUserWithGoogleError({ error })))
  ));


  loginWithGoogle$ = createEffect((): any => this.actions$.pipe(
    ofType(CoreActions.loginUserWithGoogle),
    switchMap(() => { return this.firebaseService.loginWithGoogle() }),
    map((firebaseUser) => {
      const user = firebaseUser?.user;
      if (user) {
        this.router.navigate(['/home']);
        return CoreActions.loginUserWithGoogleSuccess({
          data: this.firebaseService.extractFireBaseUserInfo(user)
        })
      } else {
        return CoreActions.loginUserWithGoogleError({
          error: null
        })
      }
    }),
    catchError(error => of(CoreActions.loginUserWithGoogleError({ error })))
  ));

  logoutUser$ = createEffect((): any => this.actions$.pipe(
    ofType(CoreActions.logoutUser),
    switchMap(() => { return this.firebaseService.logoutUser() }),
    tap(() => {
      CoreActions.logoutUserSuccess({
        data: true
      });
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 400);

    }),
    catchError(error => of(CoreActions.logoutUserError({ error })))
  ), { dispatch: false });


  constructor(private actions$: Actions, private firebaseService: FirebaseAuthService, private router: Router) { }

}
