import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginform:FormGroup;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      uname: new FormControl(),
      pwd: new FormControl(),
    }); } 
    gotodashboard(values){
      console.log(values);
      console.log(values.pwd);
    if(this.loginService.checkuser(values.uname,values.pwd)){
      this.router.navigateByUrl('/dashboard');
    }
  }

}
