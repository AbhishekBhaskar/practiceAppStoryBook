import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-block',
  templateUrl: './date-block.component.html',
  styleUrls: ['./date-block.component.css']
})
export class DateBlockComponent implements OnInit {

  constructor() { }

  attendace = [{
    name: "Abhishek",
    date: "04-11-2019",
    inTime: "08:40",
    outTime: "18:30"
  },
  {
    name: "Akhi",
    date: "04-11-2019",
    inTime: "10:40",
    outTime: "13:30"
  },
  {
    name: "Abhishek",
    date: "05-11-2019",
    inTime: "14:40",
    outTime: "18:00"
  },
  {
    name: "Akhi",
    date: "05-11-2019",
    inTime: "08:40",
    outTime: "18:30"
  }];

  Hours:number;
  Minutes:number;

  calculateWorkHrs(){
    for(let iter of this.attendace){
      var inTime = iter.inTime;
      var inHrs = inTime.slice(0,2);
      var parsedinHrs = parseFloat(inHrs);
      var inMins = inTime.slice(3);
      var parsedinMins = parseFloat(inMins);

      var outTime = iter.outTime;
      var outHrs = outTime.slice(0,2);
      var parsedoutHrs = parseFloat(outHrs);
      var outMins = outTime.slice(3);
      var parsedoutMins = parseFloat(outMins);

      var totalInMins = (parsedinHrs*60)+parsedinMins;
      var totalOutMins = (parsedoutHrs*60)+parsedoutMins;
      var diffInMins = totalOutMins-totalInMins;

      this.Hours = Math.floor(diffInMins/60);
      this.Minutes= diffInMins%60;
      var totalWorkingHrs = Math.round(diffInMins/60);
      //console.log(iter.name,qt,rem);

    }
  }

  ngOnInit() {
}
}
