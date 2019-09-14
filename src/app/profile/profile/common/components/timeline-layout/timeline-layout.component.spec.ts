import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineLayoutComponent } from './timeline-layout.component';

describe('TimelineLayoutComponent', () => {
  let component: TimelineLayoutComponent;
  let fixture: ComponentFixture<TimelineLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
