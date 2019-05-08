import { Component, OnInit } from '@angular/core';
import{ReminderService} from '../reminder.service';

@Component({
  selector: 'app-timepage',
  templateUrl: './timepage.page.html',
  styleUrls: ['./timepage.page.scss'],
})
export class TimepagePage implements OnInit {
hour;
minute;
timeofDay;
  constructor(public reminder: ReminderService) { 

  }

  setMinute(){
    this.reminder.setMinute(this.minute);
  }
  setHour(){
    this.reminder.setHour(this.hour);
  }
  setTimeOfDay(){
    this.reminder.setTimeOfDay(this.timeofDay);
  }

  ngOnInit() {
  }

}
