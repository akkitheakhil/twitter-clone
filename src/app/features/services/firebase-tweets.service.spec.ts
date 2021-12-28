import { TestBed } from '@angular/core/testing';

import { FirebaseTweetsService } from './firebase-tweets.service';

describe('FirebaseTweetsService', () => {
  let service: FirebaseTweetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseTweetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
