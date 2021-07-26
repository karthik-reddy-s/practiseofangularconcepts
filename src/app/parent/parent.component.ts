import { Component, OnInit } from '@angular/core';
import { DataService} from'../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
okok='';
datafromchild='';

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
recieveData(data){
  this.datafromchild=data;
  
}
sendData(){
  this.dataService.changedata(this.okok);}
}

