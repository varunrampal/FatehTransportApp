import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { ContactusComponent } from './contactus/contactus.component';
import { ContactUsRoutingModule } from './contactus.routing';
import { ContactusListComponent } from './contactus-list/contactus-list.component';
import { OfficeLocationsComponent } from './office-locations/office-locations.component';
import { EmploymentComponent } from './employment/employment.component';
import { DownloadFormComponent } from './download-form/download-form.component';
import { DriverApplicationComponent } from './driver-application/driver-application.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    ContactUsRoutingModule
  ],
  declarations: [ContactusComponent,
     ContactusListComponent,
     OfficeLocationsComponent,
     EmploymentComponent,
     DownloadFormComponent,
     DriverApplicationComponent
  
  ]
})
export class ContactusModule { }
