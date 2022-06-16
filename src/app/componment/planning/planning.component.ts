import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import {Router} from "@angular/router";
import {VisioService} from "../../services/visio.service";
import {Room} from "../../entity/room";
import { HttpClient } from '@angular/common/http';
import {addDurations, CalendarOptions} from "@fullcalendar/angular";
import Swal from "sweetalert2";
import {FormateursService} from "../../services/formateur.service";


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };
  formateur!: any;
  form!: any;
  allRooms!: any;
  room:Room[]=[]
  selectedDate!: Date;
  constructor(private router:Router,private service:VisioService,
              private http: HttpClient,
              private formservice:FormateursService) {
  }

  handleDateClick(res:any) {

    this.router.navigate(['visio/'+res.event.id])

  }
  ngOnInit(): void {
    const token = localStorage.getItem('mhatlioussema');
    if (token) {
      let decoded = jwt_decode(token);
      this.form = decoded;

      this.formservice.getById(this.form.data._id).subscribe(
        res => {
          this.formateur = res
          this.allRooms = this.formateur.idR;
          for (let i of this.allRooms) {
            this.service.getRoomByid(i, this.room).subscribe(
              res => {
                this.room.push(res.room)
                let datea = new Date(res.room.settings.scheduled_time);
                let d = res.room.settings.scheduled_time.substr(0, 10)
                let date = new Date(d)
                this.Events.push({
                    title: res.room.name + " " + "at " +
                      (datea.getUTCHours()+1) + ":" + datea.getUTCMinutes()

                    , date: d
                    ,
                    id: res.room.room_id
                  },
                )

                setTimeout(() => {
                  this.calendarOptions = {
                    initialView: 'dayGridMonth',
                    eventClick: this.handleDateClick.bind(this),
                    events: this.Events,

                  };
                }, 2500);


              }
            )
          }
        })

    }



  }

  go(room_id: string) {
    this.router.navigate(['home/visio/'+room_id])

  }

}


