import { CoreFacadeService } from '../services/core-facade.service';
import { Component, OnInit } from '@angular/core';
import { faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'twitter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faTwitter: IconDefinition = faTwitter;
  faGoogle: IconDefinition = faGoogle;
  constructor(private facade: CoreFacadeService) { }

  ngOnInit(): void {
  }


  handleLoginForm() {

  }

  loginWithGoogle() {
    this.facade.callLoginWithGoogle();
  }

}
