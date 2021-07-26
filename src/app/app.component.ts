import {Component,ComponentFactoryResolver,ViewContainerRef,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'royal';
  isActive=false;
  students=[{name: 'ramesh', age:25, place:'banglore'},
{name:'buvan', age:35, place:'noida'},
{name:'chitra', age:21, place:'delhi'},];
isSpecial=false;
a:number=5;
dateValue=new Date();
constructor(private viewContainerRef:ViewContainerRef,private cfr:ComponentFactoryResolver){}
getColor(place){
  switch(place){  
    case 'banglore':return '#2980b9';
  case 'noida':return '#2980b9';
  case 'delhi':return '#e67e22';
}}
async load(){
  this.viewContainerRef.clear();
  const {customcomponent}=await import('./custom/custom.component');
  this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(customcomponent));
}
}
    


