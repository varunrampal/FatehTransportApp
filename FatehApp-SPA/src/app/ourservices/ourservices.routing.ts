import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurservicesComponent } from './ourservices.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { OurServicesListComponent } from './our-services-list/our-services-list.component';
import { AutoHaulComponent } from './auto-haul/auto-haul.component';
import { HeavyHaulComponent } from './heavy-haul/heavy-haul.component';
import { SuperBComponent } from './super-b/super-b.component';
import { TandemFlatStepRollTiteComponent } from './tandem-flat-step-roll-tite/tandem-flat-step-roll-tite.component';
import { DryVanComponent } from './dry-van/dry-van.component';

const OurServicesRoutes: Routes = [
  {
    path: 'our-services',
    component: OurservicesComponent,
    children: [
      { path: '', component: OurServicesListComponent },
      { path: 'logistics', component: LogisticsComponent },
      { path: 'auto-haul', component: AutoHaulComponent },
      { path: 'heavy-haul', component: HeavyHaulComponent },
      { path: 'super-b', component: SuperBComponent },
      { path:'tandem-flat-step-tite', component: TandemFlatStepRollTiteComponent},
      { path: 'dry-van', component: DryVanComponent}
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(OurServicesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OurServicesRoutingModule { }
