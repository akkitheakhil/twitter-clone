
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import * as ProfileActions from '../profile/profile-store.actions';
import { switchMap, map, catchError, of, repeat } from 'rxjs';
import { UserProfile } from '../../models/user-profile.model';
import { FirebaseProfileService } from '../../services/firebase-profile.service';

@Injectable()
export class ProfileStoreEffect {

  fetchUserProfile$ = createEffect((): any => this.actions$.pipe(
    ofType(ProfileActions.fetchUserProfile),
    switchMap(() => {
      console.log('Calling fetchUserProfile');
      return this.firebaseProfileService.getProfile()
    }),
    map((profile) => {
      console.log('profile', profile);
      if (profile) {
        this.router.navigate(['/home']);
        return ProfileActions.setUserProfileSuccess({ data: profile })
      } else {
        this.router.navigate(['/create-profile']);
        return ProfileActions.setUserProfileError({ error: null })
      }
    }),
    catchError(error => of(ProfileActions.setUserProfileError({ error }))),
    repeat(),
  ));

  createProfile$ = createEffect((): any => this.actions$.pipe(
    ofType(ProfileActions.createProfile),
    switchMap((profile) => {
      return this.firebaseProfileService.createProfile(profile.data)
    }),
    map(() => {
      return ProfileActions.fetchUserProfile();
    }),
    catchError(error => of(ProfileActions.createProfileError({ error }))),
    repeat(),
  ))

  constructor(private actions$: Actions,
    private firebaseProfileService: FirebaseProfileService,
    private router: Router) { }
}
