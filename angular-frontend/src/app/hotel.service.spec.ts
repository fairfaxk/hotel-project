import { TestBed, inject } from '@angular/core/testing';
import {} from 'jasmine'
import { HotelService } from './hotel.service';

describe('HotelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelService]
    });
  });

  it('should be created', inject([HotelService], (service: HotelService) => {
    expect(service).toBeTruthy();
  }));
});
