//import { FormBuilder } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

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
import {MatIconModule} from '@angular/material/icon';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    TimepickerComponent,
    ShiftDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormBuilder,
    ReactiveFormsModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  entryComponents: [
    ShiftDetailsComponent
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector){

  }

  ngDoBootstrap(){
    const shiftDetailsElement = createCustomElement(ShiftDetailsComponent, {injector:this.injector});
    customElements.define('shiftDetails-element', shiftDetailsElement);
  }

}
