import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector:'[customIf]',})
  
export class customIfDirective {

    constructor(
    private templateRef:TemplateRef<any>,
      private viewContainer: ViewContainerRef){}
    
  @Input()
 set customIf (condition:boolean) {
     if(condition){
         this.viewContainer.createEmbeddedView(this.templateRef);
     }
     else{
         this.viewContainer.clear();
     }}
     }
 


