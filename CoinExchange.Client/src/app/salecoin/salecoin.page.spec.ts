import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalecoinPage } from './salecoin.page';

describe('SalecoinPage', () => {
  let component: SalecoinPage;
  let fixture: ComponentFixture<SalecoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalecoinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalecoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
