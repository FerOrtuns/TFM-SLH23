import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PujaComponent } from './components/puja/puja.component';
import { AgencialibreComponent } from './pages/agencialibre/agencialibre.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { NormativaComponent } from './pages/normativa/normativa.component';
import { MiligaComponent } from './pages/miliga/miliga.component';

const routes: Routes = [
  {
    path:'',
    component:MiligaComponent,
    children:[
      {
        path:'equipos',
        component: EquiposComponent
      },
      {
        path:'playersfa',
        component: AgencialibreComponent
      },
      {
        path:'pujar/:PLAYER',
        component: PujaComponent
      },
      {
        path:'normativa',
        component: NormativaComponent
      },
      {
        path:'**', redirectTo:''
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyleagueRoutingModule { }
