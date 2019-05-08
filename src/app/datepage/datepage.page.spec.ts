import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepagePage } from './datepage.page';

describe('DatepagePage', () => {
  let component: DatepagePage;
  let fixture: ComponentFixture<DatepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
