import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { AppComponent } from './app.component';
import { SignInComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { appRoutes } from './routes';

import { NavbarComponent } from './layout/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ValueComponent } from './value/value.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './_guard/auth.guard';
import { BlogComponent } from './blog/blog.component';

@NgModule({
   declarations: [
      AppComponent,
      SignInComponent,
      RegisterComponent,
      ValueComponent,
      NavbarComponent,
      RegisterComponent,
      HomeComponent,
      AboutComponent,
      BlogComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      GridModule,
      FormsModule,
      ReactiveFormsModule,
      ButtonsModule,
      InputsModule,
      HttpModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
    ],

    providers: [
      AuthService,
      AuthGuard
    ],
    bootstrap: [AppComponent]
  })

export class AppModule { }
