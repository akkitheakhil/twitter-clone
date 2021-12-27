import { FeatureFacadeService } from '../../services/feature-facade.service';
import { Component, OnInit } from '@angular/core';
import { faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faBell, faCaretDown, faEnvelope, faHashtag, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'twitter-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faTwitter: IconDefinition = faTwitter;
  faHome: IconDefinition = faHome;
  faExplore: IconDefinition = faHashtag;
  faMessage: IconDefinition = faEnvelope;
  faNotification: IconDefinition = faBell;
  faDropdown: IconDefinition = faCaretDown;
  faAccount: IconDefinition = faUser;

  userProfile$ = this.featureFacade.getUserProfile();

  constructor(private featureFacade: FeatureFacadeService) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.featureFacade.logoutUser();
  }

}
