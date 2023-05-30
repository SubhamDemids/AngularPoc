import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  dataEmitter: EventEmitter<any> = new EventEmitter<any>();
  
  sendData(data: any) {
    this.dataEmitter.emit(data);
  }
  constructor() { }
}
