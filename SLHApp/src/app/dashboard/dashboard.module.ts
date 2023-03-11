import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { HeadComponent } from './components/head/head.component';
import { MenunavComponent } from './components/menunav/menunav.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PageFilterPipe } from './pipes/page-filter.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    HeadComponent,
    MenunavComponent,
    SpinnerComponent,
    PageFilterPipe,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    HeadComponent,
    MenunavComponent,
    SpinnerComponent,
    FlexLayoutModule,
    PageFilterPipe
  ]
})
export class DashboardModule { }
