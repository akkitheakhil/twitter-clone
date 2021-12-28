import { CoreFacadeService } from '../../core/services/core-facade.service';
import { FirebaseTweetsService } from './firebase-tweets.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TweetsAction from '../store/tweets/tweet-store.actions';
import { selectAllFeedTweets } from '../store/tweets/tweet-store.selectors';

@Injectable({
  providedIn: 'root'
})
export class FeatureFacadeService {

  constructor(
    private store: Store<any>,
    private coreFacade: CoreFacadeService,
    private firebaseTweetService: FirebaseTweetsService) { }

  logoutUser() {
    this.coreFacade.logoutUser();
  }

  getFirebaseUserInfo() {
    return this.coreFacade.getCurrentUserInfo();
  }

  getUserProfile() {
    return this.coreFacade.getUserProfile();
  }

  postTweet(tweet: any) {
    return this.firebaseTweetService.postTweets(tweet);
  }

  getAllTweets() {
    return this.store.select(selectAllFeedTweets);
  }

  fetchAllTweets() {
    this.store.dispatch(TweetsAction.fetchAllTweets());
  }

}
