import { TestBed } from '@angular/core/testing';

import { CoreFacadeService } from './core-facade.service';

describe('CoreFacadeService', () => {
  let service: CoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
