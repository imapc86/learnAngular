import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetUserNameService {

  public userRole = new BehaviorSubject<string>('userDefaultRole');
  public userCountry = new Subject<string>();

  public counter = new BehaviorSubject<number>(0);

  constructor() { }
}
