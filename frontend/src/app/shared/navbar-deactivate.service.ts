import { NavbarService } from './navbar.service';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { SignInComponent } from '../signin/signin.component';

@Injectable()
export class NavbarDeactivateService implements CanDeactivate<SignInComponent> {

constructor( public nav: NavbarService) { }

  canDeactivate(target: SignInComponent) {
    this.nav.hide();
    return true;
  }
}
