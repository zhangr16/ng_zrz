import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Son2Component } from './son2.component';

describe('Son2Component', () => {
  let component: Son2Component;
  let fixture: ComponentFixture<Son2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Son2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Son2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
