import { BrowserModule } from 		'@angular/platform-browser';
import { NgModule } from 		'@angular/core';
import { HttpClientModule } from 	'@angular/common/http';
import { AppRoutingModule,  } from       './app-routing.module';
import { FormsModule } from 		'@angular/forms';
import { RouterModule, Routes } from	'@angular/router';

import { AppComponent } from		'./app.component';
import { NavComponent } from		'./nav/nav.component';
import { HomeComponent } from		'./home/home.component';
import { LoginComponent } from		'./login/login.component';
import { FooterComponent } from		'./footer/footer.component';
import { AdminComponent } from		'./admin/admin.component';
import { AboutUsComponent } from 	'./about-us/about-us.component';
import { ServicesComponent } from 	'./services/services.component';
import { ContactUsComponent } from 	'./contact-us/contact-us.component';
import { SplashComponent } from './splash/splash.component';

import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    AdminComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
//    RouterModule.forRoot(Routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
