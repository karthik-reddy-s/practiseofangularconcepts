import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import{ HttpClient} from '@angular/common/http'
const API_URL=environment.apiURL;
const departments='/api/employee/departmentst';
const DepartmentsById='/api/employee/depquery';
const social='https://banking-appi-ly.herokuapp.com/posts'
const deletedepartments='/api/employee/deleteid';
const POST_Employee='/api/employee/createnewemployee';
const UPDATE_EMPLOYEES='/api/employee/updateid';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient:HttpClient) { }
  public getData(){
    return this.httpClient.get(`${API_URL}${departments}`);
  }
  public getData1(){
    return this.httpClient.get(`${social}`);
  }
  public getData2(id){
    return this.httpClient.get(`${API_URL}${DepartmentsById}?id=${id}`);
  }
  public deleteStudent(deptId){
    return this.httpClient.delete(`${API_URL}${deletedepartments}/${deptId}`);

  }
  
  public createNewStudent(dp) {
    return this.httpClient.post(`${API_URL}${POST_Employee}`, dp);}
  public updateNewStudent(id,data) {
    return this.httpClient.put(`${API_URL}${UPDATE_EMPLOYEES}/${id}`,data);
  }
}
