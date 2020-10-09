import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfHomeComponent } from './conf-home.component';

describe('ConfHomeComponent', () => {
  let component: ConfHomeComponent;
  let fixture: ComponentFixture<ConfHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
