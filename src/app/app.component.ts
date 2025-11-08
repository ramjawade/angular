import { Component } from '@angular/core';
import { AdvanceSearchComponent } from './examples/advance-search/advance-search.component';

@Component({
  selector: 'app-root',
  imports: [ AdvanceSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true
})
export class AppComponent {
  title = 'angular';
}
