import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookComponentComponent } from './room-book-component.component';

describe('RoomBookComponentComponent', () => {
  let component: RoomBookComponentComponent;
  let fixture: ComponentFixture<RoomBookComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomBookComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomBookComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
