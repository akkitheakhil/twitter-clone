import { FeatureFacadeService } from '../../services/feature-facade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twitter-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userInfo$ = this.featureFacade.getFirebaseUserInfo();
  userProfile$ = this.featureFacade.getUserProfile();
  constructor(private featureFacade: FeatureFacadeService) { }

  ngOnInit(): void {
  }

}
