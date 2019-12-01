import { ShiftDetailsComponent } from "./../app/shift-details/shift-details.component";
import { TimepickerComponent } from "./../app/timepicker/timepicker.component";
import { ComponentBComponent } from "./../app/component-b/component-b.component";
import { action } from "@storybook/addon-actions";
import { ComponentAComponent } from "./../app/component-a/component-a.component";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { FullCalendarModule } from "@fullcalendar/angular";
import {Injector} from "@angular/core";
//@ts-ignore
import * as markdown from "./notes/component-a.notes.md";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { any } from "prop-types";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import {createCustomElement} from '@angular/elements';

storiesOf("Component A", module)
  .addDecorator(
    moduleMetadata({
      declarations: [ComponentAComponent,TimepickerComponent, ShiftDetailsComponent],
      imports: [
        ReactiveFormsModule,
        FullCalendarModule,
        NgxMaterialTimepickerModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule
      ],
      entryComponents: [
        ShiftDetailsComponent
     ],
      providers: [FormBuilder]
    })
  )
  .add(
    "forms",
    () => ({
      component: ComponentAComponent,
      props: {
        onSubmit: $event => {
          console.log($event.value);
        }
      }
    }),
    { notes: { markdown } }
  )
  .add(
    "component B",
    () => ({
      component: ComponentBComponent,
      props: {
        name: "Abhishek",
        myevent: action("Hello Abhishek!!")
      }
    }),
    { notes: { markdown } }
  )
  .add("TimePicker", () => ({
    component: TimepickerComponent,
    props: 
    {
      onSubmit: $event => {
        console.log($event);
      },
      shiftElement:any

    }
  }));
