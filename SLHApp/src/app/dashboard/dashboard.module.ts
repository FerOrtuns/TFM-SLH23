import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeadComponent } from './components/head/head.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    HeadComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  exports: [
    SidenavComponent,
    HeadComponent
  ]
})
export class DashboardModule { }
