import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

// import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');" pasa a mapsmodule.ts
// (mapboxgl as any).accessToken = 'pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja3hramV2OWIwbjEwMzFwYzJlZWl6N2g5In0.iKXPpYvo7UPRiiZ-x_lCrw';pasa a mapsmodule.ts

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})

export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;


  ngAfterViewInit(): void {
    console.log(this.divMap);

      if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';
    const map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }



}
