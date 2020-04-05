/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutoHaulComponent } from './auto-haul.component';

describe('AutoHaulComponent', () => {
  let component: AutoHaulComponent;
  let fixture: ComponentFixture<AutoHaulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoHaulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoHaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
