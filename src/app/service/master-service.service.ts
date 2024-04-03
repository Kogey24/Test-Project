import { Injectable } from '@angular/core';
import { staffrecords } from '../staffrecords';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private http:HttpClient) { }
apiurl='api/staffrecords/'
  Getall() {
    console.log(this.apiurl)
    return this.http.get<staffrecords[]>(this.apiurl);
  }
  GetRecord(id:number){
    return this.http.get<staffrecords>(this.apiurl+id);
  }
  CreateRecord(record :staffrecords) {
    return this.http.post(this.apiurl, record);
  }
  UpdateRecord(record: staffrecords){
    return this.http.put(this.apiurl +record.id, record);
  }
  DeleteRecord(id:number){
    return this.http.delete(this.apiurl +id);
  }
  
}
