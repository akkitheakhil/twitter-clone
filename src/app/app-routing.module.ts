import { map } from 'rxjs';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/join']);
const redirectLoggedInToApp = () => redirectLoggedInTo(['/home']);

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login', loadChildren: () => import('./core/login/login.module').then(m => m.LoginModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToApp }
  },
  {
    path: 'logout', loadChildren: () => import('./core/logout/logout.module').then(m => m.LogoutModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'join', loadChildren: () => import('./core/join/join.module').then(m => m.JoinModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToApp }
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: 'create-profile', loadChildren: () => import('./core/create-profile/create-profile.module').then(m => m.CreateProfileModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
