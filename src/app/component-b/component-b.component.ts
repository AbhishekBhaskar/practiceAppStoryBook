import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  @Input() name: String;
  @Output() myevent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
