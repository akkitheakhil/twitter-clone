import { FEATURE_KEY } from '../../shared/constants/store.constants';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as AuthReducer from './auth/auth-store.reducer';
import * as ProfileReducer from './profile/profile-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthStoreEffect } from './auth/auth-store.effects';
import { ICoreState } from '../models/core-state.model';
import { ProfileStoreEffect } from './profile/profile-store.effects';

const featureKey = FEATURE_KEY.Core;

const CoreReducer = {
  auth: AuthReducer.reducer,
  profile: ProfileReducer.reducer
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthStoreEffect, ProfileStoreEffect]),
    StoreModule.forFeature(featureKey, CoreReducer)
  ]
})
export class CoreStoreModule { }
