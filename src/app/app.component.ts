import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimezoneBsDatepickerComponent } from 'ram@ng-kit';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimezonePipe } from './pipes/timezone.pipe';

interface TimezoneInfo {
  name: string;
  timezone: string;
  flag: string;
  offset: string;
  code: string;
  countryCode: string;
}

@Component({
  selector: 'app-root',
  imports: [TimezoneBsDatepickerComponent, TimezonePipe, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular';
  currentDate: Date = new Date();
  private intervalId: any;
  
  selectedTimezone: string = 'Europe/London';
  selectedDate: Date | undefined = undefined;

  timezones: TimezoneInfo[] = [
    { name: 'London', timezone: 'Europe/London', flag: '🇬🇧', offset: 'UTC+0', code: 'GMT', countryCode: 'GB' },
    { name: 'New York', timezone: 'America/New_York', flag: '🇺🇸', offset: 'UTC-5', code: 'EST', countryCode: 'US' },
    { name: 'Paris', timezone: 'Europe/Paris', flag: '🇫🇷', offset: 'UTC+1', code: 'CET', countryCode: 'FR' },
    { name: 'Dubai', timezone: 'Asia/Dubai', flag: '🇦🇪', offset: 'UTC+4', code: 'GST', countryCode: 'AE' },
    { name: 'Mumbai', timezone: 'Asia/Kolkata', flag: '🇮🇳', offset: 'UTC+5:30', code: 'IST', countryCode: 'IN' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo', flag: '🇯🇵', offset: 'UTC+9', code: 'JST', countryCode: 'JP' },
    { name: 'Sydney', timezone: 'Australia/Sydney', flag: '🇦🇺', offset: 'UTC+11', code: 'AEDT', countryCode: 'AU' },
    { name: 'Los Angeles', timezone: 'America/Los_Angeles', flag: '🇺🇸', offset: 'UTC-8', code: 'PST', countryCode: 'US' }
  ];

  ngOnInit() {
    // Update current time every second
    this.intervalId = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onTimezoneChange() {
    // Timezone changed, selectedTimezone is already updated via ngModel
  }

  onDateChange(date: Date) {
    this.selectedDate = date;
  }
}

