import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyleagueRoutingModule } from './myleague-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { AgencialibreComponent } from './pages/agencialibre/agencialibre.component';
import { TradeComponent } from './pages/trade/trade.component';
import { NormativaComponent } from './pages/normativa/normativa.component';


@NgModule({
  declarations: [
    EquiposComponent,
    AgencialibreComponent,
    TradeComponent,
    NormativaComponent
  ],
  imports: [
    CommonModule,
    MyleagueRoutingModule,
    MaterialModule
  ]
})
export class MyleagueModule { }
