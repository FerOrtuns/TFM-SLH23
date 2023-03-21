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
import { ButtonPageFilterComponent } from './components/button-page-filter/button-page-filter.component';

import { CountdownModule } from 'ngx-countdown';
import { ApipageFilterPipe } from './pipes/apipage-filter.pipe';
import { ApiplayerpageFilterPipe } from './pipes/apiplayerpage-filter.pipe';
import { ApiplayerinfopageFilterPipe } from './pipes/apiplayerinfopage-filter.pipe';

const countdown = require('countdown');


@NgModule({
  declarations: [
    HomeComponent,
    HeadComponent,
    MenunavComponent,
    SpinnerComponent,
    PageFilterPipe,
    ButtonPageFilterComponent,
    ApipageFilterPipe,
    ApiplayerpageFilterPipe,
    ApiplayerinfopageFilterPipe,
    
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    CountdownModule,
  ],
  exports: [
    HeadComponent,
    MenunavComponent,
    SpinnerComponent,
    FlexLayoutModule,
    PageFilterPipe,
    ButtonPageFilterComponent,
    CountdownModule, // revisar?
    ApipageFilterPipe,
    ApiplayerpageFilterPipe,
    ApiplayerinfopageFilterPipe
    
  ]
})
export class DashboardModule { }
