import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { staffrecords } from '../staffrecords';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }
  apiurl='api/staffrecords/'

  Getall() {
    
    return this.http.get('https://localhost:7144/api/Staffrecords');
  }
  GetRecord(id:number){
    return this.http.get<staffrecords>('https://localhost:7144/api/Staffrecords/GetbyCode');
  }
  CreateRecord(record :staffrecords) {
    return this.http.post<staffrecords[]>('https://localhost:7144/api/Staffrecords/Create', record);
  }
  UpdateRecord(record: staffrecords){
    return this.http.put('https://localhost:7144/api/Staffrecords/Update?code'+record.code, record);
  }
  DeleteRecord(id:number){
    // return this.http.delete(this.apiurl +id);
  }
}
