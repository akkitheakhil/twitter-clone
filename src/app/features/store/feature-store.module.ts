import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as TweetReducer from './tweets/tweet-store.reducers';
import { TweetsStoreEffect } from './tweets/tweet-store.effects';
import { FEATURE_KEY } from '../../shared/constants/store.constants';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

const featureKey = FEATURE_KEY.Feature;

const reducers = {
  feed: TweetReducer.reducer
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([TweetsStoreEffect]),
    StoreModule.forFeature(featureKey, reducers)
  ]
})
export class FeatureStoreModule { }
