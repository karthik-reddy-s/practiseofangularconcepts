import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-backdb',
  templateUrl: './backdb.component.html',
  styleUrls: ['./backdb.component.css']
})
export class BackdbComponent implements OnInit {
  dps: any;
  constructor(private crudservice: CrudService, private router: Router) { }


  ngOnInit(): void {
    this.crudservice.getData().subscribe(data => { console.log(data); this.dps= data; }, (err => { console.log(err); }))
  }
  deletefn(deptId) {
    this.crudservice.deleteStudent(deptId).subscribe((data) => { console.log(data); }, (err) => { console.log(err); })
  }

  createStudentComponent() {
    console.log('Inside createStudentComponent Method');
    this.router.navigateByUrl('createstudent');
  }
  updateStudentComponent(deptId) {
    console.log(deptId);
    this.router.navigate(['updatestudent'],{
      state:{deptId:deptId},});
    }
    
  }



