import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetNameService {

  private _name: string = '';

  get name(){
    return this._name;
  }

  set nameSet(name:string){
    this._name = name;
  }

  constructor() { }
}
