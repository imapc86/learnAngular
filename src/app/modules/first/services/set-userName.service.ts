import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetUserNameService {

  public userRole = new BehaviorSubject<string>('userRole');

  constructor() { }
}
