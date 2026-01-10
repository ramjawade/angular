import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimezoneBsDatepickerComponent } from './timezone-bs-datepicker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { SimpleChange } from '@angular/core';

describe('TimezoneBsDatepickerComponent', () => {
  let component: TimezoneBsDatepickerComponent;
  let fixture: ComponentFixture<TimezoneBsDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TimezoneBsDatepickerComponent,
        BsDatepickerModule.forRoot(),
        FormsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimezoneBsDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ControlValueAccessor', () => {
    it('should write value and convert external date to internal date', () => {
      // Setup: External date is 12:00 UTC
      const externalDate = new Date('2023-01-01T12:00:00Z');
      component.timezone = 'UTC';
      
      component.writeValue(externalDate);
      
      expect(component.internalDate).toBeDefined();
      // Even if Local is not UTC, if Target IS UTC, then Internal Date's Local Time 
      // should match the External Date's UTC time.
      // e.g. External 12:00 UTC. Internal Local should be 12:00.
      expect(component.internalDate!.getHours()).toBe(externalDate.getUTCHours());
      expect(component.internalDate!.getMinutes()).toBe(externalDate.getUTCMinutes());
    });

    it('should handle null write value', () => {
      component.writeValue(null);
      expect(component.internalDate).toBeUndefined();
    });

    it('should register onChange callback', () => {
      const fn = jasmine.createSpy('onChangeCallback');
      component.registerOnChange(fn);
      
      component.onChange(new Date()); 
      expect(fn).toHaveBeenCalled();
    });

    it('should register onTouched callback', () => {
      const fn = jasmine.createSpy('onTouchedCallback');
      component.registerOnTouched(fn);
      component['onTouchedFn'](); 
      expect(fn).toHaveBeenCalled();
    });
  });

  describe('Timezone Conversion', () => {
    it('should correctly calculating offset difference', () => {
      const date = new Date('2023-01-01T12:00:00Z');
      component.timezone = 'America/New_York'; // -5 hours
      
      component.writeValue(date);
      const internal = component.internalDate!;
      
      // 12:00 UTC is 07:00 America/New_York
      // The internal date logic ensures that internal.getHours() (Local) === 7
      expect(internal.getHours()).toBe(7);
      expect(internal.getMinutes()).toBe(0);
    });

    it('should update internal date when timezone input changes', () => {
      const externalDate = new Date('2023-01-01T12:00:00Z');
      component.timezone = 'UTC';
      component.writeValue(externalDate);
      
      const initialInternal = new Date(component.internalDate!);

      // Change to NY (-5)
      component.timezone = 'America/New_York';
      component.ngOnChanges({
        timezone: new SimpleChange('UTC', 'America/New_York', false)
      });

      // We expect the internal representation to shift.
      // UTC (12) -> NY (7). 
      // Internal date timestamp usually decreases (moves back in time) to match the earlier hour.
      expect(component.internalDate!.getTime()).not.toBe(initialInternal.getTime());
    });
  });

  describe('User Interaction', () => {
    it('should emit new date when user selects value', () => {
      const spy = jasmine.createSpy('onChangeFn');
      component.registerOnChange(spy);
      spyOn(component.bsValueChange, 'emit');

      // Simulating user picking "10:00" in the UI
      component.timezone = 'UTC';
      // Use local date constructor to ensure it "looks like" 10:00 in the runner's timezone
      // because the datepicker emits "Local" dates matching the visual selection
      const pickedDate = new Date(2023, 0, 1, 10, 0, 0);
      
      component.onChange(pickedDate);
      
      expect(spy).toHaveBeenCalled();
      const emitted = spy.calls.mostRecent().args[0];
      // If we pick 10:00 "Internal", and Target is UTC.
      // External should be 10:00 UTC.
      expect(emitted.getUTCHours()).toBe(10);
      // Minutes should also be 0
      expect(emitted.getUTCMinutes()).toBe(0);
    });
  });
});
