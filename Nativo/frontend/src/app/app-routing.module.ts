import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { DailyactivitiesComponent } from './pages/dailyactivities/dailyactivities.component';
import { WeeklyactivitiesComponent } from './pages/weeklyactivities/weeklyactivities.component';
import { ResultsComponent } from './pages/results/results.component';
import { CreateactComponent } from './pages/createact/createact.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: '',
    component: MainComponent,

    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'dailyactivities',
        component: DailyactivitiesComponent,
      },
      {
        path: 'weeklyactivities',
        component: WeeklyactivitiesComponent,
      },
      {
        path: 'results',
        component: ResultsComponent,
      },
      {
        path: 'createact',
        component: CreateactComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '**',
        component: PagenotfoundComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
