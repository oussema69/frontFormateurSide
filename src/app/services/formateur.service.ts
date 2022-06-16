import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Formateur, Formateurup} from "../entity/formateur"; 

@Injectable({
  providedIn: 'root'
})
export class FormateursService {

  api=environment.Api+"formateurs";
  constructor(private http:HttpClient) { }
  getall():Observable<Formateur[]>{
    return this.http.get<Formateur[]>(this.api);}

  addF(nFormateur: Formateurup) {
    return this.http.post<Formateur>(this.api,nFormateur);
  }

  getById( id : string):Observable<Formateur>{
    return this.http.get<Formateur>(`${this.api}/${id}`);
  }
 
  update (id:String , updated : any):Observable<Formateur>{
    return this.http.put<Formateur>(`${this.api}/${id}` , updated);
  }

  updateValidation(id:string){
    return this.http.patch(`${this.api}/${id}`,{});
  }
}
