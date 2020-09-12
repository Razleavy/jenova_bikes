import { Component, OnInit } from '@angular/core';

import * as L from "leaflet";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {

  mapOptions: L.MapOptions;

  constructor() { }

  ngOnInit(): void {
    this._initMap();
  }

  private _initMap() {
    this.mapOptions = {
      layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
        }),
      ],
      zoom: 14.2,
      zoomControl: false,
      center: L.latLng(53.3498, -6.2603),
    };
  }
}