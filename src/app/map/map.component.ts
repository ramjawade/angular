import { Component, OnInit } from '@angular/core';

// import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import * as L from 'leaflet';
import * as createjs from "createjs-module";
import { icon, latLng, Map, marker, point, polyline, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  baseLayers = [ L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18  }) ];
  center = L.latLng([ 21.616579336740603,  78.57421875 ]);
  fitBounds = L.latLngBounds([ [41.902277040963696, 144.14062500000003], [0.7031073524364909, 28.212890625000004] ]);
  
  onMapReady(map: Map) {
    map.setZoom(4);
    var x = createjs;
  }
  constructor() {  
    // var sampleMap = L.map('mapid').setView([0, 0], 13);
    // this.baseLayers = [ L.tileLayer( 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18 }) ];
  }
  ngOnInit() {
    
  }
}
