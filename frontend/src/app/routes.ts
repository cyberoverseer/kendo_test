import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './signin/signin.component';
import { ValueComponent } from './value/value.component';

export const appRoutes: Routes = [
    { path : '', redirectTo: 'login', pathMatch : 'full'},
    {path : 'register', component: RegisterComponent },
    {path: 'login', component: SignInComponent},
    {path: 'value', component: ValueComponent},
];
