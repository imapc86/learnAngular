import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetUserNameService {

  public userRole = new BehaviorSubject<string>('userRole');
  public userCountry = new Subject<string>();

  constructor() { }
}
