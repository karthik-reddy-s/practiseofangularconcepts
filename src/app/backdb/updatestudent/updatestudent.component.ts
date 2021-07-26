import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import { DepartmentModel } from 'src/app/models/departments.model';


@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  DEPTID: any;
  department;
  deptForm: FormGroup;
  
  DepartmentModel = new DepartmentModel();
  
  constructor(private router: Router,private crudService: CrudService) { 
   
      let paramValues;
      if (this.router.getCurrentNavigation() != null) {
        paramValues = this.router.getCurrentNavigation().extras.state;
      }
      this.DEPTID = paramValues.deptId;
      console.log(this.DEPTID);
      this.crudService.getData2(this.DEPTID).subscribe(
        (d) => {
          console.log(d);
          this.department = d;
          //console.log(this.dp1[0].NameofEmployee);
          this.DepartmentModel.deptId = this.department[0].deptId;
          this.DepartmentModel.NameofEmployee = this.department[0].nameofemployee;
          this.DepartmentModel.Dateofjoining = this.department[0].dateofjoining;
          this.DepartmentModel.Depart = this.department[0].depart;
          this.DepartmentModel.Price = this.department[0].price;
        },
        (e) => console.log(e)
      );
  
  }


  ngOnInit(): void {
    this.deptForm = new FormGroup({
      nameofemployee: new FormControl(),
      dateofjoining: new FormControl(),
      depart: new FormControl(),
      price: new FormControl(),
    });
  }
  updateNewStudent(f) {
     console.log(f);
    
    this.crudService.updateNewStudent(this.DepartmentModel.deptId,f).subscribe(
      (data) => 
        console.log(data)
      ,
      (err) => 
        
        console.log(err)
      
    );
  }
  
}
