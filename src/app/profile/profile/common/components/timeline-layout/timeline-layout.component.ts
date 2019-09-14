import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-layout',
  templateUrl: './timeline-layout.component.html',
  styleUrls: ['./timeline-layout.component.css']
})
export class TimelineLayoutComponent implements OnInit {

@Input() item : any;
@Input() visible : Boolean;
@Input() type : string;
  constructor() { }

  ngOnInit() {
  }

}
