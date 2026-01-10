import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timezone',
  standalone: true
})
export class TimezonePipe implements PipeTransform {
  private datePipe = new DatePipe('en-US');

  transform(date: Date | string | number, timezone: string, format: string = 'medium'): string | null {
    if (!date) {
      return '';
    }

    // Convert input to Date object
    const dateObj = date instanceof Date ? date : new Date(date);

    try {
      // Convert IANA timezone to UTC offset
      const offset = this.getTimezoneOffset(dateObj, timezone);
      
      // Use Angular's DatePipe with the calculated offset
      return this.datePipe.transform(dateObj, format, offset);
    } catch (error) {
      console.error(`Error converting timezone ${timezone}:`, error);
      return this.datePipe.transform(dateObj, format);
    }
  }

  /**
   * Converts IANA timezone string to UTC offset format that Angular's DatePipe accepts
   * e.g., 'America/New_York' -> '-0500' or '+0000'
   */
  private getTimezoneOffset(date: Date, timezone: string): string {
    try {
      // Get the time in the specified timezone
      const tzDate = new Date(date.toLocaleString('en-US', { timeZone: timezone }));
      
      // Get the time in UTC
      const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
      
      // Calculate offset in minutes
      const offsetMinutes = (tzDate.getTime() - utcDate.getTime()) / (1000 * 60);
      
      // Convert to hours and minutes
      const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
      const offsetMins = Math.abs(offsetMinutes) % 60;
      
      // Format as +HHMM or -HHMM
      const sign = offsetMinutes >= 0 ? '+' : '-';
      const hours = String(offsetHours).padStart(2, '0');
      const mins = String(offsetMins).padStart(2, '0');
      
      return `${sign}${hours}${mins}`;
    } catch (error) {
      console.error(`Invalid timezone: ${timezone}`, error);
      // Return UTC offset as fallback
      return '+0000';
    }
  }
}

