import { CommonConstants } from '../../../shared/constants/common-constants';
import { createReducer, on } from '@ngrx/store';
import * as TweetsAction from './tweet-store.actions';
import { Tweet } from '../../models/tweet.model';


const httpDataStatus = CommonConstants.HTTP_DATA_STATUS;

export const initialTweetState: { tweets: Tweet[]; dataStatus: string } = {
  tweets: [],
  dataStatus: httpDataStatus.LOADING
}

export const reducer = createReducer(
  initialTweetState,

  on(TweetsAction.fetchAllTweets, (state) => ({
    ...initialTweetState
  })),

  on(TweetsAction.fetchAllTweetsSuccess, (state, { data }) => ({
    ...state,
    tweets: data,
    dataStatus: httpDataStatus.SUCCESS
  })),

  on(TweetsAction.fetchAllTweetsError, (state, { error }) => ({
    ...state,
    tweets: [],
    error,
    dataStatus: httpDataStatus.ERROR
  })),

)
