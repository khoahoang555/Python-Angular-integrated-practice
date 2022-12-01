import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNotificationStatusComponent } from './menu-notification-status.component';

describe('MenuNotificationStatusComponent', () => {
  let component: MenuNotificationStatusComponent;
  let fixture: ComponentFixture<MenuNotificationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNotificationStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNotificationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
