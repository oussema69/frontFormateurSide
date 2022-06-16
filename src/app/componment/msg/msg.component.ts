import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "../../services/message.service";
import jwt_decode from "jwt-decode";
import {Message} from "../../entity/message";

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
id!:string;
app:any
  fileUrl="http://localhost:3000/files/get/";
  messagef:any
  form:any
  messageapp:any
  message!: string;
  messages:any
  constructor(private route:ActivatedRoute,private msgservice:MessageService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params["id"];
this.getapp(this.id)
    const token = localStorage.getItem('mhatlioussema');

    if (token) {
      let decoded = jwt_decode(token);
      this.form = decoded;


    }
    this.getidf(this.form.data._id,this.id)
  }
getapp(id:string){
    this.msgservice.getapp(id).subscribe(res=>{
      this.app=res
    })
}
getidf(ids:string,idr:string){
    this.msgservice.getbyidF(ids,idr).subscribe(res=> {
        this.messageapp = res
        this.messages=this.messageapp.messages

      }
    )
}


  send() {

    this.msgservice.verif(this.form.data._id,this.id).subscribe(res=>{
      if(res==null){


        const messages={
          idS: this.form.data._id,
          idR: this.id,
          messages: [{ msg: this.message, ids: this.form.data._id }]
        }


  this.msgservice.sendmessage(messages).subscribe(data=>{
    this.getidf(this.form.data._id,this.id)
    this.message=''

  })


      }else{
        this.msgservice.pushmsg(res._id,this.message,this.form.data._id).subscribe(
          res=>{
            this.getidf(this.form.data._id,this.id)
            this.message=''

          }
        )

      }
    })
  }
}

