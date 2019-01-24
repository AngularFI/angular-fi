import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationButtonsComponent } from './registration-buttons.component';

describe('RegistrationButtonsComponent', () => {
  let component: RegistrationButtonsComponent;
  let fixture: ComponentFixture<RegistrationButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
