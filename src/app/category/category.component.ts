
import {Component,ComponentFactoryResolver,ViewContainerRef,ViewEncapsulation} from '@angular/core';

@Component({
    selector:'category',
    templateUrl:'./category.component.html',
    styleUrls:['./category.component.css'],


})

export class categorycomponent{
    constructor(private viewContainerRef:ViewContainerRef,private cfr:ComponentFactoryResolver){}
    async load(){
        this.viewContainerRef.clear();
        const {customcomponent}=await import('src/app/custom/custom.component');
        this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(customcomponent));
      }
}