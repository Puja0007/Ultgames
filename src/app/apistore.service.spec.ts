import { TestBed } from '@angular/core/testing';

import { ApistoreService } from './apistore.service';

describe('ApistoreService', () => {
  let service: ApistoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApistoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
