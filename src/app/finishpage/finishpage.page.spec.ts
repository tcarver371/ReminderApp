import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishpagePage } from './finishpage.page';

describe('FinishpagePage', () => {
  let component: FinishpagePage;
  let fixture: ComponentFixture<FinishpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
