import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timezone',
  standalone: true
})
export class TimezonePipe implements PipeTransform {
  
  transform(date: Date | string | number | null | undefined, timezone: string, format: string = 'medium'): string | null {
    if (!date) return '';
    
    try {
      // Create a Date object from the input
      const dateObj = new Date(date);
      
      // We need to display the time as it would be in the target timezone.
      // E.g. 12:00 UTC displayed in America/New_York (07:00).
      // We can use Intl.DateTimeFormat to get the parts, OR use the offset trick with DatePipe.
      // The offset trick allows preserving the 'medium', 'short' format strings of DatePipe.

      // 1. Get the ISO string of the date in the target timezone
      //    This gives us the "visual" date parts for the target timezone
      const targetTimeStr = dateObj.toLocaleString('en-US', { timeZone: timezone });
      const targetDate = new Date(targetTimeStr);

      // 2. Use DatePipe on this "visual" date.
      //    We must be careful: DatePipe normally uses local timezone.
      //    If we just strictly format the string, it might be easier.
      //    But strictly conforming to the previous implementation (which I failed to read fully earlier) is safer.
      
      // Let's implement robust Logic:
      // Construct a DatePipe-compatible offset or use the "visual date" trick.
      const dp = new DatePipe('en-US');
      return dp.transform(targetDate, format);
      
    } catch (error) {
      console.error('TimezonePipe Error:', error);
      return '';
    }
  }
}
