import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WidgetsModule } from '../../widgets/widgets.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    WidgetsModule,
    SharedModule
  ]
})
export class DashboardModule { }
