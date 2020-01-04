import { TestBed } from '@angular/core/testing';

import { BookingListService } from './booking-list.service';

describe('BookingListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingListService = TestBed.get(BookingListService);
    expect(service).toBeTruthy();
  });
});
