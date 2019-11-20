import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  attendanceTimings = this.fb.group({
    time:['']
  })

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  sendTimeData()
  {
    this.onSubmit.emit(this.attendanceTimings);
  }

  ngOnInit() {
  }

}
