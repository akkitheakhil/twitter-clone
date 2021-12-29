import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinRoutingModule } from './join-routing.module';
import { JoinComponent } from './join.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JoinComponent
  ],
  imports: [
    CommonModule,
    JoinRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JoinModule { }
