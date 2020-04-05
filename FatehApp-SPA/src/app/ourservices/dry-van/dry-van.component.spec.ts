/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DryVanComponent } from './dry-van.component';

describe('DryVanComponent', () => {
  let component: DryVanComponent;
  let fixture: ComponentFixture<DryVanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DryVanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DryVanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
