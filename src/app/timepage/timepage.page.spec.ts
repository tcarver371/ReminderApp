import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepagePage } from './timepage.page';

describe('TimepagePage', () => {
  let component: TimepagePage;
  let fixture: ComponentFixture<TimepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimepagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
