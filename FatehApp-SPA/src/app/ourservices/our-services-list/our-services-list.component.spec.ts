/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurServicesListComponent } from './our-services-list.component';

describe('OurServicesListComponent', () => {
  let component: OurServicesListComponent;
  let fixture: ComponentFixture<OurServicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurServicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
