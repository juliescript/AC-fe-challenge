import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { MailListingComponent } from './mail-listing/mail-listing.component';

const routes: Routes = [
  { path: '', component: MailListingComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
