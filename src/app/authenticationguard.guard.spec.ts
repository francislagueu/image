import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticationguardGuard } from './authenticationguard.guard';

describe('AuthenticationguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationguardGuard]
    });
  });

  it('should ...', inject([AuthenticationguardGuard], (guard: AuthenticationguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
