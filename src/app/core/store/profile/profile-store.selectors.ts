import { ICoreState } from '../../models/core-state.model';
import { FEATURE_KEY } from '../../../shared/constants/store.constants';

import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';

const featureKey = FEATURE_KEY.Core;
export const selectCoreFeature = createFeatureSelector<any, ICoreState>(featureKey);

export const selectUserInfo = createSelector(selectCoreFeature, (state: ICoreState) => state?.profile);
