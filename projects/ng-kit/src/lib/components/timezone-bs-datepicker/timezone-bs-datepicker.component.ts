import { Component, Input, Output, EventEmitter, ViewChild, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BsDatepickerDirective, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'lib-timezone-bs-datepicker',
  standalone: true,
  imports: [BsDatepickerModule],
  templateUrl: './timezone-bs-datepicker.component.html',
  styleUrl: './timezone-bs-datepicker.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimezoneBsDatepickerComponent),
      multi: true
    }
  ]
})
export class TimezoneBsDatepickerComponent implements ControlValueAccessor, OnChanges {
  @ViewChild(BsDatepickerDirective) datepicker?: BsDatepickerDirective;
  
  // Timezone to display the date in (e.g., 'America/New_York', 'UTC', 'Asia/Kolkata')
  @Input() timezone: string = 'UTC';
  
  // Additional common inputs
  @Input() placeholder: string = 'Date';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
  
  // Output for compatibility
  @Output() bsValueChange = new EventEmitter<Date>();
  
  // Internal date - adjusted for timezone display in UI
  internalDate?: Date;
  
  // External date - actual user's local date (what the form gets)
  private externalDate?: Date;
  
  // ControlValueAccessor callbacks
  private onChangeFn: (value: Date | null) => void = () => {};
  private onTouchedFn: () => void = () => {};
  
  bsConfig: Partial<BsDatepickerConfig> = {
    dateInputFormat: 'YYYY-MM-DD HH:mm:ss',
    containerClass: 'theme-blue'
  };

  /**
   * Called when any input property changes
   * Recalculates internal date when timezone changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['timezone'] && !changes['timezone'].firstChange) {
      // Timezone changed, recalculate internal date from external date
      if (this.externalDate) {
        this.internalDate = this.externalToInternal(this.externalDate);
      }
    }
  }

  /**
   * Called when user selects a date in the UI
   * The date from the picker is in "internal" timezone representation
   * We need to convert it back to the user's local timezone
   */
  onChange(event: Date | null) {
    if (event) {
      // Convert internal date (UI display) to external date (actual value)
      this.internalDate = event;
      this.externalDate = this.internalToExternal(event);
      
      // Emit the external date to the form and output
      this.onChangeFn(this.externalDate);
      this.bsValueChange.emit(this.externalDate);
    } else {
      this.internalDate = undefined;
      this.externalDate = undefined;
      this.onChangeFn(null);
      this.bsValueChange.emit(undefined as any);
    }
  }

  /**
   * Convert external date (user's local time) to internal date (adjusted for target timezone)
   * This is used when setting the value FROM the form
   */
  private externalToInternal(externalDate: Date): Date {
    // Get the offset difference between local timezone and target timezone
    const offsetMinutes = this.getTimezoneOffsetDifference(externalDate);
    
    // Adjust the date by the offset to show the correct time in the UI
    // correct logic: Local + (Target - Local) = Target
    const internalDate = new Date(externalDate.getTime() + offsetMinutes * 60000);
    
    return internalDate;
  }

  /**
   * Convert internal date (UI display in target timezone) to external date (user's local time)
   * This is used when the user picks a date
   */
  private internalToExternal(internalDate: Date): Date {
    // Get the offset difference
    const offsetMinutes = this.getTimezoneOffsetDifference(internalDate);
    
    // Reverse the adjustment
    const externalDate = new Date(internalDate.getTime() - offsetMinutes * 60000);
    
    return externalDate;
  }

  /**
   * Calculate the offset difference in minutes between local timezone and target timezone
   * Returns positive if target timezone is ahead, negative if behind
   */
  private getTimezoneOffsetDifference(date: Date): number {
    try {
      // Get the time in the target timezone
      const targetTimeStr = date.toLocaleString('en-US', { timeZone: this.timezone });
      const targetTime = new Date(targetTimeStr);
      
      // Get the time in local timezone
      const localTimeStr = date.toLocaleString('en-US');
      const localTime = new Date(localTimeStr);
      
      // Calculate difference in minutes
      const diffMs = targetTime.getTime() - localTime.getTime();
      const diffMinutes = Math.round(diffMs / 60000);
      
      return diffMinutes;
    } catch (error) {
      console.error(`Error calculating timezone offset for ${this.timezone}:`, error);
      return 0;
    }
  }

  // ControlValueAccessor implementation
  
  /**
   * Called by Angular when the form value is set programmatically
   * Receives external date (user's local time)
   */
  writeValue(externalDate: Date | null): void {
    if (externalDate) {
      this.externalDate = externalDate;
      // Convert to internal date for UI display
      this.internalDate = this.externalToInternal(externalDate);
    } else {
      this.externalDate = undefined;
      this.internalDate = undefined;
    }
  }

  /**
   * Called by Angular to register the change callback
   */
  registerOnChange(fn: (value: Date | null) => void): void {
    this.onChangeFn = fn;
  }

  /**
   * Called by Angular to register the touched callback
   */
  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  /**
   * Called by Angular to disable/enable the control
   */
  setDisabledState?(isDisabled: boolean): void {
    // Can be implemented if needed to disable the datepicker
  }
}
