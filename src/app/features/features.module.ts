import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileCardComponent } from './widgets/profile-card/profile-card.component';
import { FollowSuggestionComponent } from './widgets/follow-suggestion/follow-suggestion.component';
import { TrendingCardComponent } from './widgets/trending-card/trending-card.component';


@NgModule({
  declarations: [
    FeaturesComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FontAwesomeModule
  ]
})
export class FeaturesModule { }
