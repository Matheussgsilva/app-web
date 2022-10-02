import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';

import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LayoutComponent, canActivate: [ AuthGuard ], children: [
    { path: '', component: HomeComponent },
    { path: ':id/detalhes', component: DetailsComponent },
    { path: 'register', component: RegisterComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}