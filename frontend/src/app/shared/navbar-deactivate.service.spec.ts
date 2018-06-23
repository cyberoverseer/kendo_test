/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavbarDeactivateService } from './navbar-deactivate.service';

describe('Service: NavbarDeactivate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarDeactivateService]
    });
  });

  it('should ...', inject([NavbarDeactivateService], (service: NavbarDeactivateService) => {
    expect(service).toBeTruthy();
  }));
});
