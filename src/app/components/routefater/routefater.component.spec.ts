import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutefaterComponent } from './routefater.component';

describe('RoutefaterComponent', () => {
  let component: RoutefaterComponent;
  let fixture: ComponentFixture<RoutefaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutefaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutefaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
