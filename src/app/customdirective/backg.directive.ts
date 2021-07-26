import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector:'[backg]',})
  
export class BackgDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.backgroundColor="red";

  
  }

}
