import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyleagueRoutingModule } from './myleague-routing.module';
import { RostersComponent } from './pages/rosters/rosters.component';
import { MaterialModule } from 'src/app/material/material.module';
import { EquiposComponent } from './pages/equipos/equipos.component';


@NgModule({
  declarations: [
    RostersComponent,
    EquiposComponent
  ],
  imports: [
    CommonModule,
    MyleagueRoutingModule,
    MaterialModule
  ]
})
export class MyleagueModule { }
