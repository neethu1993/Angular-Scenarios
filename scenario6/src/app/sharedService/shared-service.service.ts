import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  setMessage(message:string){
    this.messageSource.next(message);
  }
}
