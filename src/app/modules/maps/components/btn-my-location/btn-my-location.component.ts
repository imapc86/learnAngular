import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss']
})
export class BtnMyLocationComponent {

  constructor(
    private mapSv: MapService,
    private placesSv: PlacesService
  ) { }

  goToMyLocation(){

    if(!this.placesSv.isUserLocationReady) throw Error('No hay ubicación del usuario');
    if(!this.mapSv.isMapReady) throw Error('No hay un mapa disponible.');
    this.mapSv.flyTo(this.placesSv.userLocation!);
    
  }

}
