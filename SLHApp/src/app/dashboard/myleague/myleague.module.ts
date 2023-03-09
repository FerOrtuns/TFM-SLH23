import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyleagueRoutingModule } from './myleague-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { AgencialibreComponent } from './pages/agencialibre/agencialibre.component';


@NgModule({
  declarations: [
    EquiposComponent,
    AgencialibreComponent
  ],
  imports: [
    CommonModule,
    MyleagueRoutingModule,
    MaterialModule
  ]
})
export class MyleagueModule { }
