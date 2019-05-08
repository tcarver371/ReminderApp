import { Component, OnInit } from '@angular/core';
import{ReminderService} from '../reminder.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-finishpage',
  templateUrl: './finishpage.page.html',
  styleUrls: ['./finishpage.page.scss'],
})
export class FinishpagePage implements OnInit {
text;
  constructor(public reminder: ReminderService, public router: Router) {

   }
   //Gets the text the user entered into the input box and sends it to the reminder service
   setText(){
    this.reminder.setText(this.text);
   }
   //Saves all the data that we have collected so far
   save(){
     this.reminder.save();
     this.router.navigate(['/home']);
   }
  ngOnInit() {
  }

}
