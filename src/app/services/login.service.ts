import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  checkuser(uname, pwd): boolean {
    if (uname === "admin" && pwd === "admin") {
      localStorage.setItem('uname', uname);
      return true;
    } else {
      return false;
      localStorage.removeItem('uname');
    }
  }}



