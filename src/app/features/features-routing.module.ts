import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '', component: FeaturesComponent, children: [
      { path: 'home', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
