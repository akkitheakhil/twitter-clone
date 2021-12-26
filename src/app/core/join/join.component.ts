import { faGoogle, IconDefinition, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twitter-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  faTwitter: IconDefinition = faTwitter;
  faGoogle: IconDefinition = faGoogle;
  constructor() { }

  ngOnInit(): void {
  }

  handleJoinForm() {

  }

}
