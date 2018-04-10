import { TestBed, async } from '@angular/core/testing';

import { Hotel } from './app/Hotel/Hotel';

describe('Hotel', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Hotel
      ],
    }).compileHotel();
  }));

  it('should create the hotel', async(() => {
    const fixture = TestBed.createHotel(Hotel);
    const app = fixture.debugElement.HotelInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'hotel'`, async(() => {
    const fixture = TestBed.createHotel(Hotel);
    const app = fixture.debugElement.HotelInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createHotel(Hotel);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to hotel!!');
  }));
});
