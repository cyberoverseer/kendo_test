import { UserService } from './shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { appRoutes } from './routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ValueComponent } from './value/value.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SignInComponent
,
    ValueComponent
],
  imports: [
    BrowserModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    InputsModule,
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
