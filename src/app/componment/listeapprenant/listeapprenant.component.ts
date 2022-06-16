import {Component, Input, OnInit} from '@angular/core';
import jwt_decode from "jwt-decode";
import {MessageService} from "../../services/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listeapprenant',
  templateUrl: './listeapprenant.component.html',
  styleUrls: ['./listeapprenant.component.css']
})
export class ListeapprenantComponent implements OnInit {
@Input()
apprenant:any
  fileUrl="http://localhost:3000/files/get/";
  countmsg: any;
form:any
  idM!:string
  constructor(private msgservice:MessageService,private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('mhatlioussema');

    if (token) {
      let decoded = jwt_decode(token);
      this.form = decoded;


    }
    this.countmsga()

  }
  countmsga() {
    console.log('5adem byh barcha',this.form.data._id)
    this.msgservice.getbyidF(this.form.data._id,this.apprenant._id).subscribe(res=> {
   if(res._id){
     this.idM=res._id
this.msgservice.countmessagesform(res._id,this.apprenant._id).subscribe(res=>{
  console.log('manajmtch nbatelha',res)
  this.countmsg=res
})
   }
      }
    )
  }
  go() {
    this.router.navigate(['home/msg/'+this.apprenant._id])
  this.msgservice.viewd(this.idM,this.apprenant._id).subscribe(res=>{

  })
  }
}
