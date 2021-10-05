import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    pathMatch: 'full',
    data: { animation: 'landing-page' }
  },
  {
    path: 'profile-card',
    component: ProfileCardComponent,
    data: { animation: 'profile-card' }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'portfolio' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' }
  },
  {
    path: 'contact',
    redirectTo: '/profiles'
  },
  {
    path: 'profiles',
    component: ContactComponent,
    data: { animation: 'contact' }
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
