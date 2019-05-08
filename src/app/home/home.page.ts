import { Component } from '@angular/core';
import{ReminderService} from '../reminder.service';
import{IonItemSliding} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

    reminders;

  
  constructor(public reminder: ReminderService) {

  }
  ionViewWillEnter(){
    this.reminders = this.reminder.reminders;
  }

}
