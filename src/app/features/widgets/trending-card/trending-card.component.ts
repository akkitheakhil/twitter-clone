import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'twitter-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.scss']
})
export class TrendingCardComponent implements OnInit {

  constructor() { }

  faSettings: IconDefinition = faCog
  ngOnInit(): void {
  }

}
