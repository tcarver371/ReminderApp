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


setMonth(){
  this.reminder.setMonth(this.month);
}
setDay(){
  this.reminder.setDay(this.day);
}
  ngOnInit() {
  }

}
