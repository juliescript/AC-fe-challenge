/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetMailsService } from './get-mails.service';

describe('Service: GetMails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMailsService]
    });
  });

  it('should ...', inject([GetMailsService], (service: GetMailsService) => {
    expect(service).toBeTruthy();
  }));
});
