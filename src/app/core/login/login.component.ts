import { CoreFacadeService } from '../services/core-facade.service';
import { Component, OnInit } from '@angular/core';
import { faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'twitter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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


  handleLoginForm() {
    if (this.loginForm.invalid) {
      return;
    }
    const userInfo = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.facade.loginWithEmailPassword(userInfo);
  }

  loginWithGoogle() {
    this.facade.callLoginWithGoogle();
  }

}
