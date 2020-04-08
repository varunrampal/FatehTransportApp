import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyChooseUsRoutingModule } from './why-choose-us.routing';
import { WhyChooseUsListComponent } from './why-choose-us-list/why-choose-us-list.component';
import { WhyChooseUsComponent } from './why-choose-us.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { ManagementPhilosophyComponent } from './management-philosophy/management-philosophy.component';
import { OurCommitmentComponent } from './our-commitment/our-commitment.component';
import { OurTechnologyComponent } from './our-technology/our-technology.component';

@NgModule({
    imports: [
      CommonModule,
      WhyChooseUsRoutingModule
    ],
    declarations: [
      WhyChooseUsComponent,
      WhyChooseUsListComponent,
      CompanyProfileComponent,
      ManagementPhilosophyComponent,
      OurCommitmentComponent,
      OurTechnologyComponent
    ]
  })
  export class WhyChooseUsModule {}