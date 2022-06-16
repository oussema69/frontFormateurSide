import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class VisioService {
  api='https://api.enablex.io/video/v2/rooms'

  constructor(private http:HttpClient) { }
  createroom(data:any){
    return  this.http.post(this.api,data)
  }
  addToF(idF:string,idroom:any){
    return this.http.put(`${'http://localhost:3000/formateurs/up'}/${idF}/${idroom}`,{})
  }
  getRoomByid(idR:string,data:any):Observable<any>{
    return this.http.post(`${'  http://localhost:3000/formateurs/rooms'}/${idR}`,data)
  }
}



