import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoiaW1hcGMyNSIsImEiOiJjbDZ1emk3cDMxZXpnM2tsamNpOWp2M3FvIn0.aPsqsiG3E5k_qbv200Txmw';


if( !navigator.geolocation ){
  alert('El navegador no soporta la geolocalización.')
  throw new Error('El navegador no soporta la geolocalización.')
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
