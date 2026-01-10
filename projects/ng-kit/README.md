# @rjs/ng-kit

A specialized Angular UI kit featuring a **Timezone-Aware Bootstrap Datepicker**.

[![npm version](https://badge.fury.io/js/@rjs/ng-kit.svg)](https://badge.fury.io/js/@rjs/ng-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🌍 **Timezone Aware**: Select dates in any timezone (e.g., 'America/New_York') and get the corresponding local Date object.
- 🕒 **Timezone Pipe**: Includes a lightweight `timezone` pipe to format dates in any IANA timezone using `Intl.DateTimeFormat`.
- 📅 **Bootstrap Integration**: Built on top of `ngx-bootstrap`, offering a familiar and robust UI.
- 🤖 **Reactive Forms**: Full support for Angular Reactive Forms (`ControlValueAccessor`).
- 🔄 **Auto-Conversion**: Automatically handles offset calculations between local time and selected timezone.

## Why this package?

Working with timezones in web applications is notoriously difficult. This package solves three critical problems:

1.  **Bootstrap Datepicker Limitations**: The standard `ngx-bootstrap` datepicker (and most others) assumes the user is selecting a time in their *local* browser timezone. It has no built-in concept of "Target Timezone".
2.  **JS Date Object Limitations**: The native JavaScript `Date` object does not store timezone information. It is always tied to the browser's local time or UTC. This makes it impossible to natively represent "10:00 AM in Tokyo" if the user is in New York without manual offset manipulation.
3.  **Angular Pipe Limitations**: Standard Angular pipes do not always conveniently accept IANA timezone strings (e.g., `'Asia/Tokyo'`) for all operations. We included a robust `TimezonePipe` to handle these conversions seamlessly.

## Installation

```bash
npm install @rjs/ng-kit
```

Ensure you have the peer dependencies installed:
```bash
npm install ngx-bootstrap @angular/common @angular/core
```

## Usage

1. **Import the Component**:
   Import `TimezoneBsDatepickerComponent` in your component or module.

   ```typescript
   import { Component } from '@angular/core';
   import { TimezoneBsDatepickerComponent } from '@rjs/ng-kit';

   @Component({
     selector: 'app-root',
     standalone: true,
     imports: [TimezoneBsDatepickerComponent],
     template: `
       <lib-timezone-bs-datepicker
         [(ngModel)]="date"
         [timezone]="'America/New_York'"
         placeholder="Select Date in NY">
       </lib-timezone-bs-datepicker>
     `
   })
   export class AppComponent {
     date = new Date();
   }
   ```

2. **Reactive Forms**:
   ```typescript
   this.form = this.fb.group({
     scheduledDate: [new Date()]
   });
   ```

   ```html
   <lib-timezone-bs-datepicker
     formControlName="scheduledDate"
     [timezone]="'Asia/Tokyo'">
   </lib-timezone-bs-datepicker>
   ```

3. **Timezone Pipe**:
   Use the pipe to display dates in a specific timezone across your app.
   ```html
   <!-- Imported via TimezonePipe -->
   <p>New York Time: {{ currentDate | timezone:'America/New_York' }}</p>
   ```

## Compatibility

- Angular 19+
- ngx-bootstrap 12+

## License

MIT © Ram Jawade
