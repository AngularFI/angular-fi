import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationButtonComponent } from './registration-button.component';

describe('RegistrationButtonComponent', () => {
  let component: RegistrationButtonComponent;
  let fixture: ComponentFixture<RegistrationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
