import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairstylePage } from './hairstyle.page';

describe('HairstylePage', () => {
  let component: HairstylePage;
  let fixture: ComponentFixture<HairstylePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairstylePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairstylePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
