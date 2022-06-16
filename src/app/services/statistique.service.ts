import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
api=environment.Api
  constructor(private http:HttpClient) { }
  getByMonth(mois:Number,year:any,idF:String):Observable<number>{
 return this.http.get<number>(`${this.api}visio/countM/${mois}/${year}/${idF}`)
  }
  getvisioheure(idF:string):Observable<number>{
  return this.http.get<number>(`${this.api}visio/min/${idF}`)
  }
  getvisio(idF:string):Observable<number>{
    return this.http.get<number>(`${this.api}visio/getidf/${idF}`)
  }
  getvisfordate(db:any,df:any,idf:any):Observable<number>{
    return this.http.get<number>(`${this.api}visio/cou/${db}/${df}/${idf}`)
  }
}
