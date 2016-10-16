import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailListingComponent } from './mail-listing/mail-listing.component';

import { GetMailsService } from './shared/services/get-mails.service';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MailListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [GetMailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
