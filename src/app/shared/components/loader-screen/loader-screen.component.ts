import { faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twitter-loader-screen',
  templateUrl: './loader-screen.component.html',
  styleUrls: ['./loader-screen.component.scss']
})
export class LoaderScreenComponent implements OnInit {

  faTwitter: IconDefinition = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
