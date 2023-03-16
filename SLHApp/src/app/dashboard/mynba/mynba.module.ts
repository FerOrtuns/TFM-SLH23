import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MynbaRoutingModule } from './mynba-routing.module';
import { NbahomeComponent } from './pages/nbahome/nbahome.component';
import { NbastatsrefComponent } from './pages/nbastatsref/nbastatsref.component';
import { DashboardModule } from "../dashboard.module";
import { MaterialModule } from 'src/app/material/material.module';

import { BuscarComponent } from './components/buscar/buscar.component';
import { ResultadosComponent } from './components/resultados/resultados.component';


@NgModule({
    declarations: [
        NbahomeComponent,
        NbastatsrefComponent,
        BuscarComponent,
        ResultadosComponent
    ],
    imports: [
        CommonModule,
        MynbaRoutingModule,
        DashboardModule,
        MaterialModule,
        
    ]
})
export class MynbaModule { }
