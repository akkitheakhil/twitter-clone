import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinRoutingModule } from './join-routing.module';
import { JoinComponent } from './join.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    JoinComponent
  ],
  imports: [
    CommonModule,
    JoinRoutingModule,
    FontAwesomeModule
  ]
})
export class JoinModule { }
