import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from "ng2-charts";
import jwt_decode from "jwt-decode";
import {StatistiqueService} from "../../services/statistique.service";

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  year: number=2022
  a!:number
  form:any
  idApp:any
  db: any;
  df: any;
  nbr: number=0
  nbrh!:number
  nbrvis!:number
  public barChartType: ChartType = 'bar';

  constructor(private statservice:StatistiqueService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('mhatlioussema');

    if (token) {
      let decoded = jwt_decode(token);
      this.form = decoded;
      this.get()

    }
  this.statservice.getvisioheure(this.form.data._id).subscribe(res=>{
    this.nbrh=res
  })
    this.statservice.getvisio(this.form.data._id).subscribe(res=>{
      this.nbrvis=res
    })
  }


  get() {
    this.year=this.year
    this.barChartData[0].data=[]
    let i: number = 1;
    do {




      this.statservice.getByMonth(i,this.year,this.form.data._id).subscribe(res=>{
        this.a=res
        this.barChartData[0].data?.push( this.a)


      })
      i++;
    }
    while (i< 13);
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['janvier', 'février', 'mars', 'avril', 'mai','juin','juillet','aout','septembre','octrobre','novembre','decembre'];
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'nombre de visioconference ' }
  ];
getnb(){
  this.statservice.getvisfordate(this.db,this.df,this.form.data._id).subscribe(res=>{
    this.nbr=res
  })
}
}

