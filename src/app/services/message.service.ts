import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
api =environment.Api
  constructor(private http:HttpClient) { }

  getall():Observable<any[]>{
    return this.http.get<any[]>(`${this.api}apprenants`)
  }
  getapp(id:string):Observable<any>{
  return this.http.get<any>(`${this.api}apprenants/${id}`)
  }
  getbyidF(ids:string,idR:string):Observable<any>{
  return this.http.get(`${this.api}message/getmsg/${ids}/${idR}`)
  }
  getbyidapp(ids:string,idR:string):Observable<any>{
    return this.http.get(`${this.api}message/app/${ids}/${idR}`)
  }
  sendmessage(data:any):Observable<any>{
  return this.http.post<any>(`${this.api}message`,data)
  }
  verif(ids:string,idR:string):Observable<any>{
    return this.http.get(`${this.api}message/ver/${ids}/${idR}`)
  }
 pushmsg(id:string,msg:string,ids:string){
  return this.http.put(`${this.api}message/${id}/${msg}/${ids}`,{})
 }
countbyform(idf:string):Observable<number>{
  return this.http.get<number>(`${this.api}message/countmsg/${idf}`)
}
updatevis(idf:string){
  return this.http.put(`${this.api}message/upd/${idf}`,{})
}
countmessagesform(idM:string, idApp:string):Observable<number>{
  return this.http.get<number>(`${this.api}message/countmsgbyuser/${idM}/${idApp}`)
}
  viewd(idM:string, idApp:string){
    return this.http.patch(`${this.api}message/viwed/${idM}/${idApp}`,{})
  }
}
