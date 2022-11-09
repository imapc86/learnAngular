import { Component } from '@angular/core';
import { Feature } from '../../interfaces/places.interface';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  public selectedId: string = '';

  get isLoadingPlaces(): Boolean{
    return this.placesSv.isLoadingPlaces;
  }

  get places(): Feature[]{

    return this.placesSv.places;

  }

  constructor(
    private placesSv: PlacesService,
    private mapSv: MapService
  ) { }


  flyTo(place:Feature){
    const [lng, lat] = place.center;
    this.selectedId  = place.id;
    
    this.mapSv.flyTo([lng, lat]);
  }

  getDirections(place:Feature){

    if(!this.placesSv.userLocation) throw Error('No hay userLocation');

    this.placesSv.deletePlaces();

    const start = this.placesSv.userLocation;
    const end = place.center as [number, number];

    this.mapSv.getRouteBetweenPoints(start, end);

  }
}
