import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector:'[customFor]',})
  
export class customForDirective {

    constructor(
    private templateRef:TemplateRef<any>,
      private viewContainer: ViewContainerRef){}
    
      @Input()
      set customFor (condition:boolean) {
          
              
          
              this.viewContainer.createEmbeddedView(this.templateRef);
         
          }}