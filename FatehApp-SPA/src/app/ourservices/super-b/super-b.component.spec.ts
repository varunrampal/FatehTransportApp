/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuperBComponent } from './super-b.component';

describe('SuperBComponent', () => {
  let component: SuperBComponent;
  let fixture: ComponentFixture<SuperBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
