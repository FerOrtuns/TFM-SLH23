import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MynbaRoutingModule } from './mynba-routing.module';
import { NbahomeComponent } from './pages/nbahome/nbahome.component';
import { NbastatsrefComponent } from './pages/nbastatsref/nbastatsref.component';
import { DashboardModule } from "../dashboard.module";
import { MaterialModule } from 'src/app/material/material.module';

import { NbaNewsComponent } from './components/nba-news/nba-news.component';
import { NbaScoreBoxComponent } from './components/nba-score-box/nba-score-box.component';
import { NbaplayersComponent } from './pages/nbaplayers/nbaplayers.component';


@NgModule({
    declarations: [
        NbahomeComponent,
        NbastatsrefComponent,
        NbaNewsComponent,
        NbaScoreBoxComponent,
        NbaplayersComponent
    ],
    imports: [
        CommonModule,
        MynbaRoutingModule,
        DashboardModule,
        MaterialModule,
        
    ]
})
export class MynbaModule { }
