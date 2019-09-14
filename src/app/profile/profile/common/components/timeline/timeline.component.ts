import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timeLineList : any;
  constructor() { }

  ngOnInit() {
    this.timeLineList = [{
      title : "School",
      subtitle : " Shivaji High School Makhani",
      discription : ""
    }, {
      title : "Collage",
      subtitle : " A.C.S College Gangakhed.",
      discription : ""
    }, {
      title : "Engg. College",
      subtitle : " Government College Of Engg. Aurangabad.",
      discription : ""
    },{
      title : "JOB",
      subtitle : "Innoeye Technology Indore, MP.",
      discription : "Software Developer, Aug 2017 to Pasetnt"
    }]
  }

}
