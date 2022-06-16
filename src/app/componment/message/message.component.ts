import { Component, OnInit } from '@angular/core';
import {MessageService} from "../../services/message.service";
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  allApp:any
  fileUrl="http://localhost:3000/files/get/";
  Search!: string;
form:any
  constructor(private msgservice:MessageService,private router:Router) { }

  ngOnInit(): void {

    this.allap()

    const token = localStorage.getItem('mhatlioussema');

    if (token) {
      let decoded = jwt_decode(token);
      this.form = decoded;


    }
  }
allap(){
    this.msgservice.getall().subscribe(res=>{
      this.allApp=res
    })
}

  go(_id: any) {
    this.router.navigate(['home/msg/'+_id])

  }




}
