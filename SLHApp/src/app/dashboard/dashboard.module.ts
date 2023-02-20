import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { MyteamComponent } from './pages/myteam/myteam.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MyteamComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class DashboardModule { }
