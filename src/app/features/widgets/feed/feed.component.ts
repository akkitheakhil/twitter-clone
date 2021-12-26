import { Component, OnInit } from '@angular/core';
import { IconDefinition, faHeart, faRetweet, faShareSquare, faCommentDots } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'twitter-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  faHeart: IconDefinition = faHeart;
  faRetweet: IconDefinition = faRetweet;
  faShare: IconDefinition = faShareSquare;
  faComment: IconDefinition = faCommentDots;

  constructor() { }

  ngOnInit(): void {
  }

}
