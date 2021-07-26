import { Component, Input, OnInit, Output, EventEmitter, OnChanges, DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy  } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {
@Input() note;
username:string;
order=1;
@Output() userNameEmitter = new EventEmitter<string>();
  constructor() { console.log('inside the constructer '+this.order);
  this.order++;}

  ngOnInit(): void {console.log('inside the ngoninit '+this.order);
  this.order++;
  }
  ngOnChanges():void{console.log('inside the ngonchanges'+this.order);
  this.order++;}
  ngDoCheck():void{console.log('inside the ngdocheck'+this.order);
  this.order++;}
  ngAfterContentInit():void{console.log('inside the ngaftercontentinit'+this.order);
  this.order++;}
  ngAfterContentChecked():void{console.log('inside the ngaftercontentchecked'+this.order);
  this.order++;}
  ngAfterViewInit():void{console.log('inside the ngafterviewinit'+this.order);
  this.order++;}
  ngAfterViewChecked():void{console.log('inside the ngafterviewchecked'+this.order);
  this.order++;}
  ngOnDestroy():void{console.log('inside the ngondestroy'+this.order);
  this.order++;}
sendData(){
  this.userNameEmitter.emit(this.username);
}
}
