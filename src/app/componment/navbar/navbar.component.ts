import { Component, OnInit } from '@angular/core';
import { faFlag, faHome, faSearch,faVideo,faComments,faBell ,faSignOut,faCalendar} from '@fortawesome/free-solid-svg-icons';
import { FormateursService } from '../../services/formateur.service';
import { LoginService } from '../../services/login.service';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotificationService} from "../../services/notification.service";
import {NotifDetails} from "../../entity/notifDetails";
import {MessageService} from "../../services/message.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faHome=faHome;
  faFlag=faFlag;
  faVideo=faVideo;
  faComments=faComments;
  faBell=faBell;
  faThin=faSignOut;
  faCalendar=faCalendar;
  cheminImage:any = "assets/logoprojet.png";
  formateur!: any;
  form!: any;
   closeResult: string = '';
  fileUrl="http://localhost:3000/files/get/";
  notifD!:any
  notifvis:any
  nbmsg: any;
  msgnbr!:number
  constructor( private service:FormateursService,
    private authService: LoginService,private router:Router,
               private formservice:FormateursService,private modalService: NgbModal ,
               private notifservice:NotificationService,private msgservice:MessageService) { }

  ngOnInit(): void {  const token = localStorage.getItem('mhatlioussema');

  if(token) {
   let decoded = jwt_decode(token);

   this.form=decoded;
  }
    this.getnotifByvi(this.form.data._id)
  this.formservice.getById(this.form.data._id).subscribe(
    res=>{
      this.formateur=res
      this.getnotif(this.form.data._id)
    }
  )
    this.msgservice.countbyform(this.form.data._id).subscribe(res=>{
      this.msgnbr=res
    })

  }

  goto(id:any){
    this.router.navigate(['home/profile/'+id])
  }
  logout() {
    localStorage.removeItem('mhatlioussema');
    this.router.navigate(['']);
}

getnotifByvi(idF:string){
    this.notifservice.getByvis(idF).subscribe(
      res=>{
        this.notifvis=res
      }
    )

}


  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  this.notifservice.updatevis(this.form.data._id).subscribe(
    res=>{
      this.getnotifByvi(this.form.data._id)

    }
  )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  getnotif(id:string){
    this.notifservice.getNotif(id).subscribe(
      res=>{
        this.notifD=res
      }
    )
  }

  updatevis() {
    this.msgservice.updatevis(this.form.data._id).subscribe(res=>{
      this.msgservice.countbyform(this.form.data._id).subscribe(res=>{
        this.msgnbr=res
      })
    })
  }
}
