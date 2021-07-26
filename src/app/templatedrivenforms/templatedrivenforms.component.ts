import { Component, OnInit } from '@angular/core';
import {LoginModel} from 'src/app/models/login.model';

@Component({
  selector: 'templatedrivenforms',
  templateUrl: './templatedrivenforms.component.html',
  styleUrls: ['./templatedrivenforms.component.css']
})
export class TemplatedrivenformsComponent  {
loginModel= new LoginModel();
submit(values){
  console.log(values);
}
 
}
