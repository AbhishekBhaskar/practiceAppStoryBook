import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms'
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  // @Input() name: String;
  // @Output() myevent: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  // @Input() testForm = this.fb.group({
  //   name:[''],
  //   email:['']
  // })
  @Input() testForm: any;
  @Output() Submit:EventEmitter<any> = new EventEmitter();
  

  // onSubmit()
  // {
    
  //   console.log(this.testForm.get('name').value);
  //   console.log(this.testForm.get('email').value);
  // }

  ngOnInit() {
  }

}
