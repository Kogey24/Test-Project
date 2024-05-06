import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
   createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    return{
      staffrecords:[
        {
          id:1,
          name:'Jakes Mwangi',
          email:'jakemwangi@gmail.com',
          Year:'2006',
          department:'computer science',
          date: new Date(2012,4,20)
        },
        {
          id:2,
          name:'Malcom x',
          email:'malconxi@gmail.com',
          Year:'2000',
          department:'Engineering',
          date: new Date(1990,4,14)
        },
        {
          id:3,
          name:'Martin Luther',
          email:'martinlutherking@gmail.com',
          Year:'1997',
          department:'Revolution',
          date: new Date(1907,4,29)
        },
        {
          id:4,
          name:'Serah Wanjiko',
          email:'serah@gmail.com',
          Year:'1990',
          department:'Sales',
          date: new Date(1979,2,27)
        },
        {
          id:5,
          name:'purity wanngari',
          email:'purity@gmail.com',
          Year:'2006',
          department:'Architecture',
          date: new Date(2020,12,9)
        },
        {
          id:6,
          name:'Silvya Muchiri',
          email:'Muchiri@gmail.com',
          Year:'2019',
          department:'health',
          date: new Date(1990,6,31)
        }

      ],
      User:[
        {
          name:'Silvya Muchiri',
          email:'Muchiri@gmail.com',
          Year:'2019',
          department:'health',
          date: new Date(1990,6,31)
        }
      ]
    }
      }
  }
  
