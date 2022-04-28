import { TestBed } from '@angular/core/testing';

import { CharanService } from './Charan.service';

describe('CharanService', () => {
  let service: CharanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
