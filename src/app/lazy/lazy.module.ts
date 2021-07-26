import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import {Routes, RouterModule,Router} from '@angular/router';

const routes: Routes = [{path:'first',component:FirstComponent,},];
let a=5;

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class LazyModule { 
  constructor(private router:Router){
    if(a<5){
    this.router.navigateByUrl('/first');}
}}
