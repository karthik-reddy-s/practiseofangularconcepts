import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
    loginform:FormGroup;
  

  ngOnInit(): void {
    this.loginform=new FormGroup({
      name:new FormControl([Validators.required,Validators.max(100),Validators.min(2)]),
      age:new FormControl([Validators.required,Validators.min(18),Validators.max(99)]),
      emailid:new FormControl([Validators.required,]),
      pwd:new FormControl([Validators.required,Validators.min(8)]),
      rpwd:new FormControl([Validators.required,Validators.min(8)]),
    });
  }

  submit(values){
    alert(values);
  }

}
