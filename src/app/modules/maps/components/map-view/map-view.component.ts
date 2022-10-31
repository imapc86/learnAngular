import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker} from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElement! : ElementRef;


  constructor(
    private placesSv: PlacesService,
    private mapSv: MapService
  ) { }

  ngAfterViewInit(): void {
    
    if(!this.placesSv.userLocation) throw Error('No hay placesSv.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.placesSv.userLocation,
      zoom: 13
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo.</span>`
      );

    new Marker({color: 'red'})
      .setLngLat(this.placesSv.userLocation)
      .setPopup(popup)
      .addTo(map);

    this.mapSv.setMap(map);
  }





}
