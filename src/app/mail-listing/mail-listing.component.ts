import { Component, OnInit } from '@angular/core';

import { GetMailsService } from '../shared/services/get-mails.service';
import { Mail } from '../shared/models/mail';

import * as moment from 'moment';

@Component({
  selector: 'app-mail-listing',
  templateUrl: './mail-listing.component.html',
  styleUrls: ['./mail-listing.component.css'],
  providers: [GetMailsService]
})
export class MailListingComponent implements OnInit {

  mails: Mail[] = [];
  selectedMail: Mail;

  constructor(private getMails: GetMailsService) { }

  ngOnInit() {
    this.getMails.getMails().then(
      (mails) => {
        this.mails = mails.map(mail => {
           mail.time_formatted =  this.formatTime(mail.time_sent);
           return mail;
        });
      }
    );
  }

  onSelect(mail: Mail) {
    mail.hasBeenRead = true;
    this.selectedMail = mail;
  }

  delete(mail: Mail) {
    let index = this.mails.indexOf(mail);
    this.mails.splice(index, 1);
    if (this.selectedMail.uid === mail.uid) {
      this.selectedMail = null;
    }
  }

  formatTime(utd: number) {
    //  format "Mon 06 July, 10:53"
    return moment.unix(utd).format('ddd DD MMMM, HH:mm');
  }

}
