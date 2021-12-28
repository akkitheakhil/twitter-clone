import { FEATURE_KEY } from '../../../shared/constants/store.constants';
import { IFeatureStoreState } from '../../models/feature-store.state';

import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';

const featureKey = FEATURE_KEY.Feature;
export const selectCoreFeature = createFeatureSelector<any, IFeatureStoreState>(featureKey);

export const selectAllFeedTweets = createSelector(selectCoreFeature, (state: IFeatureStoreState) => state?.feed);
