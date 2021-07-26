import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
newmessage;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.currentmessage$.subscribe(data =>{
      this.newmessage = data
    },err=>{console.log(err);})
    }
    }
  


