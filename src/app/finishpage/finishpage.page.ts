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
   setText(){
    this.reminder.setText(this.text);
   }
   save(){
     this.reminder.save();
     this.router.navigate(['/home']);
   }
  ngOnInit() {
  }

}
