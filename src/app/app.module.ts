import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './componment/login/login.component';
import { HomeComponent } from './componment/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './componment/navbar/navbar.component';
import { ProfileComponent } from './componment/profile/profile.component';
import { MessageComponent } from './componment/message/message.component';
import { SecuritePipe } from './pipe/securite.pipe';
import { PlanningComponent } from './componment/planning/planning.component';
import { VisioconferenceComponent } from './componment/visioconference/visioconference.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { StatistiqueComponent } from './componment/statistique/statistique.component';
import {ChartsModule} from "ng2-charts";
import { ApprenantsPipe } from './pipe/apprenants.pipe';
import { MsgComponent } from './componment/msg/msg.component';
import { ListeapprenantComponent } from './componment/listeapprenant/listeapprenant.component';

FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
     NavbarComponent,
      ProfileComponent,
      MessageComponent,
      SecuritePipe,
      PlanningComponent,
      VisioconferenceComponent,
      StatistiqueComponent,
      ApprenantsPipe,
      MsgComponent,
      ListeapprenantComponent,


  ],

    imports: [
        FontAwesomeModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        HttpClientJsonpModule,
        FormsModule,
        FullCalendarModule,
        NgbModule,
        ChartsModule,


    ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
