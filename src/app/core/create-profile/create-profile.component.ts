

import { CoreFacadeService } from '../services/core-facade.service';
import { IAuth } from '../models/auth.model';
import { UserProfile } from '../models/user-profile.model';
import { faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twitter-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  userInfo$ = this.coreFacade.getCurrentUserInfo();
  faTwitter: IconDefinition = faTwitter;
  displayName: string = '';
  bio: string = '';
  userId: string = '';

  constructor(private coreFacade: CoreFacadeService) { }

  ngOnInit(): void {
  }

  handleCreateProfile(userInfo: Partial<IAuth>) {

    const profile: UserProfile = {
      uid: userInfo.id || '',
      displayName: this.displayName,
      bio: this.bio,
      userId: this.userId,
      photoUrl: userInfo.photoUrl || '',
      email: userInfo.email || '',
      createdAt: new Date(),
      updatedAt: new Date(),
      followers: 0,
      following: 0
    }

    this.coreFacade.createProfile(profile);
  }

}
