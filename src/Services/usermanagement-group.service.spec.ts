import { TestBed } from '@angular/core/testing';

import { UsermanagementGroupService } from './usermanagement-group.service';

describe('UsermanagementGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsermanagementGroupService = TestBed.get(UsermanagementGroupService);
    expect(service).toBeTruthy();
  });
});
