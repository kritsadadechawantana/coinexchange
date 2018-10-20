import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycoinPage } from './buycoin.page';

describe('BuycoinPage', () => {
  let component: BuycoinPage;
  let fixture: ComponentFixture<BuycoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuycoinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
