import { TestBed } from '@angular/core/testing';

import { HomeseviceService } from './homesevice.service';

describe('HomeseviceService', () => {
  let service: HomeseviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeseviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
