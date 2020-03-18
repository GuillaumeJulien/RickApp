import { TestBed } from '@angular/core/testing';

import { RickService } from './rick.service';

describe('RickService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RickService = TestBed.get(RickService);
    expect(service).toBeTruthy();
  });
});
