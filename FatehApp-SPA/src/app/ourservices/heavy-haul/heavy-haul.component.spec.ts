/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeavyHaulComponent } from './heavy-haul.component';

describe('HeavyHaulComponent', () => {
  let component: HeavyHaulComponent;
  let fixture: ComponentFixture<HeavyHaulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyHaulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyHaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
