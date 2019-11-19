import { TimepickerComponent } from './../app/timepicker/timepicker.component';
import { ComponentBComponent } from "./../app/component-b/component-b.component";
import { action } from "@storybook/addon-actions";
import { ComponentAComponent } from "./../app/component-a/component-a.component";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { FullCalendarModule } from "@fullcalendar/angular";
//@ts-ignore
import * as markdown from "./notes/component-a.notes.md";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { any } from "prop-types";
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import {MatGridListModule} from '@angular/material/grid-list'

var fb: FormBuilder;

// export const testForm = {
//     name:'Abhishek',
//     email:'gmail'
//   }

storiesOf("Component A", module)
  .addDecorator(
    moduleMetadata({
      declarations: [ComponentAComponent],
      imports: [
        ReactiveFormsModule,
        FullCalendarModule,
        NgxMaterialTimepickerModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule
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
    props:{
      onSubmit: $event => {
        var time = $event.get('time').value;        
        time = time.slice(0,6);
        var hrs = time.slice(0,2);
        var min = time.slice(3);
        var hrsInt = parseInt(hrs);
        var minInt = parseInt(min);
        console.log(hrsInt,minInt);
        console.log(isNaN(hrsInt));
        
      }
    }    
  }));

// storiesOf('Component A',module)
// .addDecorator(
//     moduleMetadata({
//       declarations: [ComponentAComponent],
//       imports:[ReactiveFormsModule],
//       providers:[FormBuilder]
//     })
//   )
// .add('testForm',() => ({
//     template:`<app-component-a [testForm]="testForm"></app-component-a>`,
//     props:{
//         testForm
//     },
// }),{notes:{markdown}})
// .add('Aki',()=> ({
//     component:ComponentAComponent,
//     props:{
//         name:"Aki",
//         myevent: action("Hello Aki")
//     },
// }),{notes:{markdown}})
// .add('Prani',()=> ({
//     component:ComponentBComponent,
//     props:{
//         name:"Aki",
//         myevent: action("Hello Aki")
//     },
// }),{notes:{markdown}})
