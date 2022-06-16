import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = environment.Api + "formateurs/login";
  constructor(private http :HttpClient) {
  }
  login(data:any){
    return this.http.post(this.api, data);

  }

  static loggedIn():boolean{
    var token= localStorage.getItem("mhatlioussema")
    if (token){
      return true;
    }
    return false;
  }
}
