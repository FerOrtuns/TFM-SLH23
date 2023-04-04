import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyleagueRoutingModule } from './myleague-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { AgencialibreComponent } from './pages/agencialibre/agencialibre.component';

import { NormativaComponent } from './pages/normativa/normativa.component';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from "../dashboard.module";
import { PujaComponent } from './components/puja/puja.component';
import { MiligaComponent } from './pages/miliga/miliga.component'; // revisar si es necesario


@NgModule({
    declarations: [
        EquiposComponent,
        AgencialibreComponent,
        NormativaComponent,
        PujaComponent,
        MiligaComponent
    ],
    imports: [
        CommonModule,
        MyleagueRoutingModule,
        MaterialModule,
        PdfViewerModule,
        FormsModule,
        DashboardModule,
        ReactiveFormsModule,
        
    ]
})
export class MyleagueModule { }
