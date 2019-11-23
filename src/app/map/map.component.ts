import { Component, OnInit } from '@angular/core';
import { icon, latLng, Map, marker, point, polyline, tileLayer , gridLayer } from 'leaflet';
import * as createjs from 'createjs-module';


declare let L;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public map: any;
  // baseLayers = [ L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18  }) ];
  center = L.latLng([ 21.616579336740603,  78.57421875 ]);
  fitBounds = L.latLngBounds([ [41.902277040963696, 144.14062500000003], [0.7031073524364909, 28.212890625000004] ]);

  constructor(
    // private leafletDirective: LeafletDirective
  ) {}
  ngOnInit() {
  }

  onMapReady(map: Map) {
    L.gridLayer.googleMutant({
      type: 'roadmap'	// valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
    }).addTo(map);
    this.map = map;
    map.setZoom(4);
    const x = createjs;
    // const y = this.leafletDirective;
   }
}
