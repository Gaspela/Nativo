import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { MenuComponent } from './main/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { DailyactivitiesComponent } from './pages/dailyactivities/dailyactivities.component';
import { WeeklyactivitiesComponent } from './pages/weeklyactivities/weeklyactivities.component';
import { ResultsComponent } from './pages/results/results.component';
import { CreateactComponent } from './pages/createact/createact.component'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LandingComponent } from './pages/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    PagenotfoundComponent,
    DailyactivitiesComponent,
    WeeklyactivitiesComponent,
    ResultsComponent,
    CreateactComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
