import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCancelPage } from './sub_cancel.page';

describe('SubCancelPage', () => {
  let component: SubCancelPage;
  let fixture: ComponentFixture<SubCancelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCancelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCancelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
