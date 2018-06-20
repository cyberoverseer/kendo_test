import { Routes } from '@angular/router';
import { SignupComponent } from './signup.component';


export const appRoutes: Routes = [
    { path : '', redirectTo: 'signup', pathMatch : 'full'},
    {path : 'signup', component: SignupComponent}
];
