import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from './contact-us.component';
import { ContactusListComponent } from './contactus-list/contactus-list.component';
import { OfficeLocationsComponent } from './office-locations/office-locations.component';
import { EmploymentComponent } from './employment/employment.component';
import { DownloadFormComponent } from './download-form/download-form.component';
import { DriverApplicationComponent } from './driver-application/driver-application.component';

const ContactUsRoutes: Routes = [
  {
    path: 'contact-us',
    component: ContactUsComponent,
    children: [
      { path: '', component: ContactusListComponent },
      { path: 'office-locations', component: OfficeLocationsComponent },
      { path: 'employment', component: EmploymentComponent },
      { path: 'download-form', component: DownloadFormComponent },
      { path: 'driver-application', component: DriverApplicationComponent },
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(ContactUsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactUsRoutingModule { }
