import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ValueComponent } from './value/value.component';
import { BlogComponent } from './blog/blog.component';
import { AuthGuard } from './_guard/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path : 'register', component: RegisterComponent },
    {path: 'login', component: SignInComponent},
    {path: 'value', component: ValueComponent},
    {path: 'blog', component: BlogComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
