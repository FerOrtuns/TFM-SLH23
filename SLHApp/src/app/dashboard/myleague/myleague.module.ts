import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyleagueRoutingModule } from './myleague-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { AgencialibreComponent } from './pages/agencialibre/agencialibre.component';
import { TradeComponent } from './pages/trade/trade.component';
import { NormativaComponent } from './pages/normativa/normativa.component';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from "../dashboard.module";
import { PujarComponent } from './components/pujar/pujar.component'; // revisar si es necesario


@NgModule({
    declarations: [
        EquiposComponent,
        AgencialibreComponent,
        TradeComponent,
        NormativaComponent,
        PujarComponent
    ],
    imports: [
        CommonModule,
        MyleagueRoutingModule,
        MaterialModule,
        PdfViewerModule,
        FormsModule,
        DashboardModule,
    ]
})
export class MyleagueModule { }
