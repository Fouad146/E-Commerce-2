import { TestBed } from '@angular/core/testing';

import { FinorderService } from './finorder.service';

describe('FinorderService', () => {
  let service: FinorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
