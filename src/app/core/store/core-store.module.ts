import { FEATURE_KEY } from '../../shared/constants/store.constants';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer as CoreReducer } from './auth/auth-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoreStoreEffect } from './auth/auth-store.effects';

const featureKey = FEATURE_KEY.Core;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CoreStoreEffect]),
    StoreModule.forFeature(featureKey, CoreReducer)
  ]
})
export class CoreStoreModule { }
