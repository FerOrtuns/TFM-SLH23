import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeadComponent } from './components/head/head.component';
import { MenunavComponent } from './components/menunav/menunav.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { EquiposComponent } from './myleague/pages/equipos/equipos.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    HeadComponent,
    MenunavComponent,
    SpinnerComponent,
    EquiposComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    SidenavComponent,
    HeadComponent,
    MenunavComponent,
    SpinnerComponent,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
