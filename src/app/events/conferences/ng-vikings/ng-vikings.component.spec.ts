import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVikingsComponent } from './ng-vikings.component';

describe('NgVikingsComponent', () => {
  let component: NgVikingsComponent;
  let fixture: ComponentFixture<NgVikingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgVikingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgVikingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
