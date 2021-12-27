import { UserProfile } from '../../../core/models/user-profile.model';
import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, faImages, faLaughSquint, faPhotoVideo, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'twitter-feed-post-card',
  templateUrl: './feed-post-card.component.html',
  styleUrls: ['./feed-post-card.component.scss']
})
export class FeedPostCardComponent implements OnInit {

  @Input() profile!: Partial<UserProfile>;

  textArea: string = "";

  faPicture: IconDefinition = faImages;
  faEmoji: IconDefinition = faLaughSquint;
  faGif: IconDefinition = faPhotoVideo;
  faSchedule: IconDefinition = faCalendarAlt;


  constructor() { }

  ngOnInit(): void {
  }

  textInputHandler($event: any) {
    this.textArea = $event.target.textContent;
  }

}
