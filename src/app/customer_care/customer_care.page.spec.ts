import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCarePage } from './customer_care.page';

describe('CustomerCarePage', () => {
  let component: CustomerCarePage;
  let fixture: ComponentFixture<CustomerCarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
