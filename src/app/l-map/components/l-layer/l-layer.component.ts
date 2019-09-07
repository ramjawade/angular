import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { icon, latLng, Map, marker, point, polyline, tileLayer } from 'leaflet';

@Component({
  selector: 'app-l-layer',
  templateUrl: './l-layer.component.html',
  styleUrls: ['./l-layer.component.css']
})
export class LLayerComponent implements OnInit {
  public map: any;
  baseLayers = [ L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18  }) ];
  center = L.latLng([ 21.616579336740603,  78.57421875 ]);
  fitBounds = L.latLngBounds([ [41.902277040963696, 144.14062500000003], [0.7031073524364909, 28.212890625000004] ]);

  constructor() { }

  ngOnInit() {
  }
  onMapReady(map: Map) {
    this.map = map;
    map.setZoom(4);
    // const x = createjs;
    // const y = this.leafletDirective;
   }

}
