import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedInSubject.asObservable();

  login() {

    this.loggedInSubject.next(true);
  }

  constructor() { }
}
