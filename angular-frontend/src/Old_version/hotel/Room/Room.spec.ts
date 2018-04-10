import { TestBed, async } from '@angular/core/testing';

import { Room } from './app/Room/Room';

describe('Room', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Room
      ],
    }).compileRoom();
  }));

  it('should create the room', async(() => {
    const fixture = TestBed.createRoom(Room);
    const app = fixture.debugElement.RoomInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title app`, async(() => {
    const fixture = TestBed.createRoom(Room);
    const app = fixture.debugElement.RoomInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createRoom(Room);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to room!!');
  }));
});
