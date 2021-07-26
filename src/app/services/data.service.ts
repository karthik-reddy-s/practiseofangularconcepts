import { Injectable } from '@angular/core';
import{ BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
messagesource=new BehaviorSubject('Default');
currentmessage$=this.messagesource.asObservable();

changedata(data:string){
  this.messagesource.next(data);
}
  constructor() { }
}
