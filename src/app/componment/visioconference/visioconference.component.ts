import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-visioconference',
  templateUrl: './visioconference.component.html',
  styleUrls: ['./visioconference.component.css']
})
export class VisioconferenceComponent implements OnInit {

  id!: string;
  meet ="https://elearning.yourvideo.live/"
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.meet=this.meet+this.id

  }

}
