import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-g-layer',
  templateUrl: './g-layer.component.html',
  styleUrls: ['./g-layer.component.css']
})
export class GLayerComponent implements OnInit {

  constructor() { }

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  ngOnInit() {
  }

}
