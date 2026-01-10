import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneBsDatepickerComponent } from './timezone-bs-datepicker.component';

describe('TimezoneBsDatepickerComponent', () => {
  let component: TimezoneBsDatepickerComponent;
  let fixture: ComponentFixture<TimezoneBsDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimezoneBsDatepickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimezoneBsDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
