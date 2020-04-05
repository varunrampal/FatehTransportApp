/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TandemFlatStepRollTiteComponent } from './tandem-flat-step-roll-tite.component';

describe('TandemFlatStepRollTiteComponent', () => {
  let component: TandemFlatStepRollTiteComponent;
  let fixture: ComponentFixture<TandemFlatStepRollTiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TandemFlatStepRollTiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TandemFlatStepRollTiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
