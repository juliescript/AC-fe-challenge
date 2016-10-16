/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetMailsService } from './get-mails.service';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Mail } from '../shared/mail';

describe('Service: GetMails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [GetMailsService]
    });
  });

  it('should exist', inject([GetMailsService], (service: GetMailsService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getMails method', inject([GetMailsService], (service: GetMailsService) => {
    expect(service.getMails()).toBeTruthy();
  }));

});
