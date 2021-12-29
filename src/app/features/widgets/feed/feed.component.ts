import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IconDefinition, faHeart, faRetweet, faShareSquare, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Tweet } from '../../models/tweet.model';

@Component({
  selector: 'twitter-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnChanges {

  @Input() feedTweets: Tweet[] = [];

  faHeart: IconDefinition = faHeart;
  faRetweet: IconDefinition = faRetweet;
  faShare: IconDefinition = faShareSquare;
  faComment: IconDefinition = faCommentDots;

  constructor() { }

  ngOnChanges(): void {
    console.log('feedTweets', this.feedTweets)
  }

  onErrorImageUrl(target: any, displayName: any) {
    const api = `https://ui-avatars.com/api/?name=${displayName}&background=0D8ABC&color=fff&size=128&rounded=true&bold=true&font-size=0.5';`
    target.src = api;
  }

}
