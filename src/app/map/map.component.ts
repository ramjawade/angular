import { Component, OnInit } from '@angular/core';
import { icon, latLng, Map, marker, point, polyline, gridLayer, latLngBounds } from 'leaflet';
import 'leaflet.gridlayer.googlemutant/Leaflet.GoogleMutant';

declare const L;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public map: any;
  center = latLng([ 21.616579336740603,  78.57421875 ]);
  fitBounds = latLngBounds([ [41.902277040963696, 144.14062500000003], [0.7031073524364909, 28.212890625000004] ]);

  constructor(
  ) {}
  ngOnInit() {
  }

  onMapReady(map: Map) {
    L.gridLayer.googleMutant({
      type: 'roadmap'	// valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
    }).addTo(map);
    this.map = map;
    map.setZoom(4);
   }
}
