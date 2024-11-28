import { TestBed } from '@angular/core/testing';

import { KettlerService } from './kettler.service';

describe('KettlerService', () => {
  let service: KettlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KettlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
