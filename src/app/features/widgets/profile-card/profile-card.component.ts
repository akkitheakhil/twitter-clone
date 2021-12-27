import { UserProfile } from '../../../core/models/user-profile.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'twitter-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() userProfile!: Partial<UserProfile>;
  constructor() { }

  ngOnInit(): void {
  }

}
