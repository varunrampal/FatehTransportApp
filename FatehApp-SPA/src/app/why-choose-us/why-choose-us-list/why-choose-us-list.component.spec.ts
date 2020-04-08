/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhyChooseUsListComponent } from './why-choose-us-list.component';

describe('WhyChooseUsListComponent', () => {
  let component: WhyChooseUsListComponent;
  let fixture: ComponentFixture<WhyChooseUsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyChooseUsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyChooseUsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
