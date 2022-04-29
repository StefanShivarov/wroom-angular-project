import { TestBed } from '@angular/core/testing';

import { AlreadyAuthenticatedGuard } from './already-authenticated.guard';

describe('AlreadyAuthenticatedGuard', () => {
  let guard: AlreadyAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlreadyAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
