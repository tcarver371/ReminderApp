import { Component, OnInit } from '@angular/core';
import{ReminderService} from '../reminder.service';



@Component({
  selector: 'app-datepage',
  templateUrl: './datepage.page.html',
  styleUrls: ['./datepage.page.scss'],
})
export class DatepagePage implements OnInit {
month;
day;
  constructor(public reminder: ReminderService) {

   }

//Gets the month that the user selected
setMonth(){
  this.reminder.setMonth(this.month);
}
//Gets the day that the user selected
setDay(){
  this.reminder.setDay(this.day);
}
  ngOnInit() {
  }

}
