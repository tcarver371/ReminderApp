import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ReminderService {

reminders = [];
month;
day;
hour;
minute;
timeofDay;
text;

setMonth(month){
  this.month = month;
  console.log(this.month);
}
setDay(day){
  this.day = day;
  console.log(this.day);

}
setHour(hour){
  this.hour = hour;
  console.log(this.hour);
}
setMinute(minute){
  this.minute = minute;
  console.log(this.minute);
}
setTimeOfDay(timeofDay){
  this.timeofDay = timeofDay;
  console.log(this.timeofDay);
}
setText(text){
  this.text = text;
  console.log(this.text);
}

save(){
  var reminder = {
    month: this.month,
    day: this.day,
    hour: this.hour,
    minute: this.minute,
    timeofDay: this.timeofDay,
    text: this.text
  }

  this.reminders.push(reminder);
  console.log(this.reminders);
}


  constructor() { }
}
