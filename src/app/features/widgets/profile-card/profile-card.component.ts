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

  onErrorImageUrl(target: any, displayName: any) {
    const api = `https://ui-avatars.com/api/?name=${displayName}&background=0D8ABC&color=fff&size=128&rounded=true&bold=true&font-size=0.5';`
    target.src = api;
  }

}
