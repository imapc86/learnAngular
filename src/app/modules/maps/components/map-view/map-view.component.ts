import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Map} from 'mapbox-gl';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElement! : ElementRef;


  constructor(private placesSv: PlacesService) { }

  ngAfterViewInit(): void {
    
    if(!this.placesSv.userLocation) throw Error('No hay placesSv.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.placesSv.userLocation,
      zoom: 14
    });

  }





}
