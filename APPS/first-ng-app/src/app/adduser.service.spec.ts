/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdduserService } from './adduser.service';

describe('Service: Adduser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdduserService]
    });
  });

  it('should ...', inject([AdduserService], (service: AdduserService) => {
    expect(service).toBeTruthy();
  }));
});
