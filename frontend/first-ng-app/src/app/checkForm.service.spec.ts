/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckFormService } from './checkForm.service';

describe('Service: CheckForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckFormService]
    });
  });

  it('should ...', inject([CheckFormService], (service: CheckFormService) => {
    expect(service).toBeTruthy();
  }));
});
