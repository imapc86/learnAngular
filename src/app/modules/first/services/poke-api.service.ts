import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokemons(){

    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');

  }


}
