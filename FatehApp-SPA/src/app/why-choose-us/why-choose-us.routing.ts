import { Routes, RouterModule } from '@angular/router';
import { WhyChooseUsListComponent } from './why-choose-us-list/why-choose-us-list.component';
import { WhyChooseUsComponent } from './why-choose-us.component';
import { NgModule } from '@angular/core';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { ManagementPhilosophyComponent } from './management-philosophy/management-philosophy.component';
import { OurCommitmentComponent } from './our-commitment/our-commitment.component';
import { OurTechnologyComponent } from './our-technology/our-technology.component';

const routes: Routes = [
  {
    path: 'why-choose-us',
    component: WhyChooseUsComponent,
    children: [
      { path: '', component: WhyChooseUsListComponent },
      { path: 'company-profile', component: CompanyProfileComponent },
      { path: 'management-philosophy', component: ManagementPhilosophyComponent },
      { path: 'our-commitment', component: OurCommitmentComponent },
      { path: 'our-technology', component: OurTechnologyComponent },
     ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WhyChooseUsRoutingModule { }
