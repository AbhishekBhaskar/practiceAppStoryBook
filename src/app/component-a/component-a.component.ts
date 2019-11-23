import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms'
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  testForm = this.fb.group({
    name:[''],
    email:['']
  });

  @Output() onsubmit: EventEmitter<any> = new EventEmitter();
  
  sendData()
  {
    this.onsubmit.emit(this.testForm);
  }

  ngOnInit() {
    
  }

}