import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componment/home/home.component';
import { LoginComponent } from './componment/login/login.component';
import {GardGuard} from "./gard/gard.gard";
import { MessageComponent } from './componment/message/message.component';
import { ProfileComponent } from './componment/profile/profile.component';
import {PlanningComponent} from "./componment/planning/planning.component";
import {VisioconferenceComponent} from "./componment/visioconference/visioconference.component";
import {StatistiqueComponent} from "./componment/statistique/statistique.component";
import {MsgComponent} from "./componment/msg/msg.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path:'home', component: HomeComponent ,children:[
      {path : 'message' , component : MessageComponent},
      {path:'profile/:id',component:ProfileComponent},
      {path:'plannig',component:PlanningComponent},
      {path:'stat',component:StatistiqueComponent},
      {path:'msg/:id',component:MsgComponent},

    ],canActivate: [GardGuard]},
  {path:'login',component: LoginComponent },
  {path:'visio/:id',component:VisioconferenceComponent,canActivate:[GardGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
