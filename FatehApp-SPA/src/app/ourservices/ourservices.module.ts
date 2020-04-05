import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticsComponent } from './logistics/logistics.component';
import { OurServicesRoutingModule } from './ourservices.routing';
import { OurServicesListComponent } from './our-services-list/our-services-list.component';
import { AutoHaulComponent } from './auto-haul/auto-haul.component';
import { HeavyHaulComponent } from './heavy-haul/heavy-haul.component';
import { SuperBComponent } from './super-b/super-b.component';
import { TandemFlatStepRollTiteComponent } from './tandem-flat-step-roll-tite/tandem-flat-step-roll-tite.component';
import { DryVanComponent } from './dry-van/dry-van.component';

@NgModule({
  imports: [
    CommonModule,
    OurServicesRoutingModule
  ],
  declarations: [
    OurServicesListComponent,
    LogisticsComponent,
    AutoHaulComponent,
    HeavyHaulComponent,
    SuperBComponent,
    TandemFlatStepRollTiteComponent,
    DryVanComponent
  ]
})
export class OurservicesModule { }
