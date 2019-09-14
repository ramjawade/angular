import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tringle',
  templateUrl: './tringle.component.html',
  styleUrls: ['./tringle.component.css']
})
export class TringleComponent implements OnInit {
@Input() type : string;
lScreen : string;
sScreen : string;
  constructor() { }
  ngOnInit() {
    if(this.type === 'up'){ 
      this.lScreen = "down";
      this.sScreen = "left"
    } else {
      this.lScreen = "up";
      this.sScreen = "right";
    }
  }
}
