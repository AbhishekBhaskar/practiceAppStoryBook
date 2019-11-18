import { ComponentBComponent } from './../app/component-b/component-b.component';
//import { testForm } from './component-a.stories';
//import { ComponentBComponent } from "./../app/component-b/component-b.component";
import { action } from "@storybook/addon-actions";
import { ComponentAComponent } from "./../app/component-a/component-a.component";
import { storiesOf, moduleMetadata } from "@storybook/angular";
//@ts-ignore
import * as markdown from "./notes/component-a.notes.md";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { any } from "prop-types";

var fb: FormBuilder;

// export const testForm = {
//     name:'Abhishek',
//     email:'gmail'
//   }

storiesOf("Component A", module)
  .addDecorator(
    moduleMetadata({
      declarations: [ComponentAComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    })
  )
  .add("forms", () => ({
    component: ComponentAComponent,
    props: {
      onSubmit: ($event) => {        
        console.log($event.value);
      }
    }
  }),{notes:{markdown}})
  .add('component B',()=>({
    component: ComponentBComponent,
    props:{
      name:"Abhishek",
      myevent: action("Hello Abhishek!!")
    }
  }),{notes:{markdown}})

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
