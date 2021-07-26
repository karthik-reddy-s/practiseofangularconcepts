import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import{LoaderService} from 'src/app/loader.service';


@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {
  public createStudent: FormGroup;
creation:any;
  constructor(private crudService: CrudService, private _snackbar: MatSnackBar,private loader:LoaderService) { }

  ngOnInit(): void {
    this.createStudent = new FormGroup({
      nameofemployee: new FormControl(),
      dateofjoining: new FormControl(),
      depart: new FormControl(),
      price:new FormControl()
    });
  }

  CreateStudents(dp) {
    console.log(dp);

    this.crudService.createNewStudent(dp).subscribe(
      (data) => {
        this._snackbar.open('succesful', '', { duration: 5000 });

        console.log(data);
      },
      (err) => {
        this._snackbar.open(err, '', { duration: 3000 });
        console.log('Inside Error ');
        console.log(err);
      }
    );
  }

}
