import { TestBed } from '@angular/core/testing';

import { WarningGuard } from './warning.guard';

describe('WarningGuard', () => {
  let guard: WarningGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WarningGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
