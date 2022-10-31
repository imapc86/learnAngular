import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.scss']
})
export class MapScreenComponent implements OnInit {

  get isUserLocationReady(){

    return this.placesSv.isUserLocationReady;

  }

  constructor(private placesSv: PlacesService) { }

  ngOnInit(): void {

  }

}
