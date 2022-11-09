import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataEventService {

  titulo$ = new EventEmitter<string>();

  constructor() { }

}
