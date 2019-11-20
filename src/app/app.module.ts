//import { FormBuilder } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentAComponent } from "./component-a/component-a.component";
import { ComponentBComponent } from "./component-b/component-b.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FullCalendarModule } from "@fullcalendar/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { TimepickerComponent } from "./timepicker/timepicker.component";
import { MatCardModule } from "@angular/material/card";
import {MatGridListModule} from '@angular/material/grid-list'

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    TimepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormBuilder,
    ReactiveFormsModule,
    FullCalendarModule
=======
    //FormBuilder,
    ReactiveFormsModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule,
    MatCardModule,
    MatGridListModule
>>>>>>> c72272fe999a8a9c637244441309e3e1bfcc704a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
