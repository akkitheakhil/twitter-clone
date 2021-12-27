import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProfileRoutingModule } from './create-profile-routing.module';
import { CreateProfileComponent } from './create-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateProfileComponent
  ],
  imports: [
    CommonModule,
    CreateProfileRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class CreateProfileModule { }
