import { ComponentAComponent } from './../component-a/component-a.component';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-timepicker",
  templateUrl: "./timepicker.component.html",
  styleUrls: ["./timepicker.component.css"]
})
export class TimepickerComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  
  inTime = this.fb.group({
    time: ["", Validators.required]
  });

  outTime = this.fb.group({
    time: ["", Validators.required]
  });

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  sendTimeData() {
    this.onSubmit.emit(this.inTime);
  }

  sendOutTime() {
    this.onSubmit.emit(this.outTime);
  }

  workHrs: Number = 0;
  workMins: Number = 0;
  err = null;

  calculateWorkHrs() {
    var intime = this.inTime.get("time").value;
    intime = intime.slice(0, 6);
    var hrs = intime.slice(0, 2);
    var min = intime.slice(3);
    var hrsInt = parseInt(hrs);
    var minInt = parseInt(min);

    var outtime = this.outTime.get("time").value;
    outtime = outtime.slice(0, 6);
    var hrsOut = outtime.slice(0, 2);
    var minOut = outtime.slice(3);
    var hrsOutInt = parseInt(hrsOut);
    var minOutInt = parseInt(minOut);

    if (hrsOutInt < hrsInt) {
      this.err = "Out time should be greater than In time";
      console.log(this.err);
    } else {
      this.workHrs = hrsOutInt - hrsInt;
      this.workMins = Math.abs(minOutInt - minInt);
    }

    this.onSubmit.emit({ workHrs: this.workHrs, workMins: this.workMins });
  }

  print(testForm:any){
    console.log(testForm.value);
  }

  ngOnInit() {}
}
