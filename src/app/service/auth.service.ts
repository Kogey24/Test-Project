import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // apiurl = 'http://localhost:3000/users';

  // GetAll() {
  //   return this.http.get(this.apiurl);
  // }

  // GetbyCode(code: any) {
  //   return this.http.get(this.apiurl + '/' + code);
  // }

  ProceedRegister(inputdata: any) {
    return this.http.post('https://localhost:7144/api/User/Create', inputdata);
  }

  // UpdateUser(code: any, inputdata: any) {
  //   return this.http.put(this.apiurl + '/' + code, inputdata);
  // }
  
}
