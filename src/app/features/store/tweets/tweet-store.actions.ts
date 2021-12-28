
import { createAction, props } from '@ngrx/store';

export const fetchAllTweets = createAction(
  '[FEATURE+TWEETS] Fetch All Tweets For Feed',
);
export const fetchAllTweetsSuccess = createAction(
  '[FEATURE+TWEETS] Fetch All Tweets For Feed Success',
  props<{ data: any }>()
);
export const fetchAllTweetsError = createAction(
  '[FEATURE+TWEETS] Fetch All Tweets For Feed Error',
  props<{ error: any }>()
);
