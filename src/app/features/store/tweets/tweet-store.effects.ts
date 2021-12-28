
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TweetsAction from './tweet-store.actions';
import { switchMap, map, catchError, of } from 'rxjs';
import { FirebaseTweetsService } from '../../services/firebase-tweets.service';
import { Tweet } from '../../models/tweet.model';

@Injectable()
export class TweetsStoreEffect {

  fetchAllTweets$ = createEffect((): any => this.actions$.pipe(
    ofType(TweetsAction.fetchAllTweets),
    switchMap(() => {
      return this.firebaseTweetsService.getAllTweets();
    }),
    map(tweets => {
      const tweetsData = tweets.map((tweet: Tweet) => {
        const newTweetObject = {
          ...tweet,
          tweet: decodeURIComponent(tweet.tweet),
          createdAt: tweet.createdAt.toDate()
        }
        return newTweetObject;
      });
      return TweetsAction.fetchAllTweetsSuccess({ data: tweetsData })
    }),
    catchError(error => of(TweetsAction.fetchAllTweetsError({ error })))
  ));


  constructor(private actions$: Actions,
    private firebaseTweetsService: FirebaseTweetsService) { }
}
