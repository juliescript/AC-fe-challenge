/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MailListingComponent } from './mail-listing.component';
import { Mail } from '../shared/mail';
import { GetMailsService } from '../services/get-mails.service';

describe('Component: MailListing', () => {
  it('should create an instance', () => {
    let component = new MailListingComponent ();
    expect(component).toBeTruthy();
  });

  it('should have methods', () => {
    let component = new MailListingComponent ();
    expect(component).toBeTruthy();
    expect(component.ngOnInit).toBeTruthy();
    expect(component.onSelect).toBeTruthy();
    expect(component.delete).toBeTruthy();
    expect(component.formatTime).toBeTruthy();
  });

  it('should formatTime', () => {
    let component = new MailListingComponent ();
    let mail: Mail = {
        uid: 21,
        sender: 'Ernest Hemingway',
        subject: 'animals',
        message: 'This is a tale about nihilism. The story is about a combative nuclear engineer who hates animals. It starts in a ghost town on a world of forbidden magic. The story begins with a legal dispute and ends with a holiday celebration.',
        time_sent: 1459239867,
        time_formatted: '',
        hasBeenRead: false
      };
    let time = component.formatTime(mail.time_sent);
    expect(time).toEqual('Tue 29 March, 02:24');

  });

});
