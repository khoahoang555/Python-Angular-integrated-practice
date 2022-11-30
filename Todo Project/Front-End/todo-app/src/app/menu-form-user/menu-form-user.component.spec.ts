import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFormUserComponent } from './menu-form-user.component';

describe('MenuFormUserComponent', () => {
  let component: MenuFormUserComponent;
  let fixture: ComponentFixture<MenuFormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFormUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
