import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css']
})
export class TimelineCardComponent implements OnInit {
  @Input() item : any;

  constructor() { }

  ngOnInit() {
    
  }
}
