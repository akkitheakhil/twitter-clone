import { TestBed } from '@angular/core/testing';

import { FeatureFacadeService } from './feature-facade.service';

describe('FeatureFacadeService', () => {
  let service: FeatureFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
