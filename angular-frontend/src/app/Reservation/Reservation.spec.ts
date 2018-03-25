import { TestBed, async } from '@angular/core/testing';

import { Reservation } from './app/Reservation/Reservation';

describe('Reservation', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Reservation
      ],
    }).compileReservations();
  }));

  it('should create the reservation', async(() => {
    const fixture = TestBed.createReservation(Reservation);
    const app = fixture.debugElement.ReservationInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'reservation'`, async(() => {
    const fixture = TestBed.createReservation(Reservation);
    const app = fixture.debugElement.ReservationInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createReservationReservation);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to reservation!!');
  }));
});
