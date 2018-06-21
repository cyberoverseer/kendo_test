import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { ValueComponent } from './value/value.component';


export const appRoutes: Routes = [
    { path : '', redirectTo: 'login', pathMatch : 'full'},
    {path : 'signup', component: SignupComponent},
    {path: 'login', component: SignInComponent},
    {path: 'value', component: ValueComponent},
];
