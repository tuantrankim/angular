import { TestBed } from '@angular/core/testing';

import { MemberXSystemService } from './member-xsystem.service';

describe('MemberXSystemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberXSystemService = TestBed.get(MemberXSystemService);
    expect(service).toBeTruthy();
  });
});
