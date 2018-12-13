import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conf2019Component } from './conf2019.component';

describe('Conf2019Component', () => {
  let component: Conf2019Component;
  let fixture: ComponentFixture<Conf2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conf2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conf2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
