import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', title: 'Home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'user/:userId',
    component: UserDetailsComponent,
    title: 'userDetails',
  },
];
