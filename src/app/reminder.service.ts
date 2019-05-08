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

//Gets the month
setMonth(month){
  this.month = month;
  console.log(this.month);
}
//Gets the day
setDay(day){
  this.day = day;
  console.log(this.day);

}
//Gets the hour
setHour(hour){
  this.hour = hour;
  console.log(this.hour);
}
//Gets the minute
setMinute(minute){
  this.minute = minute;
  console.log(this.minute);
}
//Gets the time of day (AM/PM)
setTimeOfDay(timeofDay){
  this.timeofDay = timeofDay;
  console.log(this.timeofDay);
}
//Gets the text the user entered into the ion-input box on the finishpage
setText(text){
  this.text = text;
  console.log(this.text);
}

//Saves all the data
save(){
  var reminder = {
    month: this.month,
    day: this.day,
    hour: this.hour,
    minute: this.minute,
    timeofDay: this.timeofDay,
    text: this.text
  }

  // Adds the data to the array of reminders that we declared at the beginning of the class
  this.reminders.push(reminder);
  console.log(this.reminders);
}


  constructor() { }
}
