import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NotifDetails} from "../entity/notifDetails";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
api=environment.Api+'notif-details'
  constructor(private http:HttpClient) { }
  getNotif(idF:string):Observable<NotifDetails>{
   return this.http.get<NotifDetails>(`${this.api}/form/${idF}`)
  }
  updatevis(id:string){
    return this.http.put(`${this.api}/formateur/${id}`,{})
  }
  getByvis(id:string):Observable<NotifDetails>{
  return this.http.get<NotifDetails>(`${this.api}/visf/${id}`)
  }
}
