import { ShiftDetails } from "./../shift-details/shiftDetails";
import { ComponentAComponent } from "./../component-a/component-a.component";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Injector
} from "@angular/core";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormBuilder, Validators } from "@angular/forms";
import { ShiftDetailsComponent } from "./../shift-details/shift-details.component";
import { createCustomElement } from "@angular/elements";

@Component({
  selector: "app-timepicker",
  templateUrl: "./timepicker.component.html",
  styleUrls: ["./timepicker.component.css"]
})
export class TimepickerComponent implements OnInit {
  constructor(private fb: FormBuilder, private injector: Injector) {
    const shiftDetailsElement = createCustomElement(ShiftDetailsComponent, {
      injector: this.injector
    });
    customElements.define("shift-details-element", shiftDetailsElement);
  }

  inTime = this.fb.group({
    time: ["", Validators.required]
  });

  outTime = this.fb.group({
    time: ["", Validators.required]
  });

  shiftDetails: ShiftDetails[] = [];

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

  print(testForm: any) {
    console.log(testForm.value);
  }

  @Output() shiftElement:any;
  
showInputForm() {
  var shiftDetailsWrapper = document.getElementById("wrapper");
   this.shiftElement = document.createElement("shift-details-element") as any;
  //document.body.appendChild(shiftElement);
  this.onSubmit.emit(this.shiftElement);
  this.shiftElement.addEventListener("pushToArray", (object: any) => {
    this.shiftDetails.push(object);
    // for(var value of this.shiftDetails)
    // {
    //   console.log(value);  
    // }
    console.log(this.shiftDetails);
  });
  shiftDetailsWrapper.appendChild(this.shiftElement);
}

pushToShiftDetails(object: any) {
  this.shiftDetails.push(object);
  console.log(this.shiftDetails);
}

ngOnInit() { }
}
