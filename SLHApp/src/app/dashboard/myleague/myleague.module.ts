import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyleagueRoutingModule } from './myleague-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { EquiposComponent } from './pages/equipos/equipos.component';


@NgModule({
  declarations: [
    EquiposComponent
  ],
  imports: [
    CommonModule,
    MyleagueRoutingModule,
    MaterialModule
  ]
})
export class MyleagueModule { }
