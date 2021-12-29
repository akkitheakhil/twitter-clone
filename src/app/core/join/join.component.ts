import { CoreFacadeService } from '../services/core-facade.service';
import { faGoogle, IconDefinition, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'twitter-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {


  faTwitter: IconDefinition = faTwitter;
  faGoogle: IconDefinition = faGoogle;
  loginForm!: FormGroup;

  authState$ = this.facade.getCurrentUserInfo();

  constructor(private facade: CoreFacadeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  handleJoinForm() {
    if (this.loginForm.invalid) {
      return;
    }
    const userInfo = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.facade.registerWithEmailPassword(userInfo);
  }

  loginWithGoogle() {
    this.facade.callLoginWithGoogle();
  }

}
