import { TestBed } from '@angular/core/testing';

import { FirebaseProfileService } from './firebase-profile.service';

describe('FirebaseProfileService', () => {
  let service: FirebaseProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
