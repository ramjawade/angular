import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timeLineList: any;
  constructor() { }
  cardWith: any;
  ngOnInit() {
    this.cardWith = document.getElementsByTagName('app-timeline-layout');
    this.timeLineList = [{
      title : 'Jun 2010 - May 2011',
      subtitle : ' Shivaji High School Makhani',
      discription : 'High School'
    }, {
      title : 'Jun 2011 - Feb 2013',
      subtitle : ' A.C.S College Gangakhed.',
      discription : 'Collage'
    }, {
      title : 'Aug 2013 - May 2017',
      subtitle : ' Government College Of Engg. Aurangabad.',
      discription : 'B.E (Information Technology).'
    }, {
      title : '16 Aug 2017 -  Present',
      subtitle : 'Innoeye Technology Indore, MP.',
      discription : 'Software Developer.'
    }];
  }

}
