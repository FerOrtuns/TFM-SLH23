import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbaNewsComponent } from './components/nba-news/nba-news.component';
import { NbaScoreBoxComponent } from './components/nba-score-box/nba-score-box.component';
import { NbahomeComponent } from './pages/nbahome/nbahome.component';
import { NbaplayersComponent } from './pages/nbaplayers/nbaplayers.component';
import { NbastatsrefComponent } from './pages/nbastatsref/nbastatsref.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes: Routes = [
  {
    path:'',
    component:NbahomeComponent,
    children:[
      {
        path:'nbastatsref',
        component: NbastatsrefComponent
      },
      {
        path:'nbanews',
        component: NbaNewsComponent
      },
      {
        path:'nbaScorebox',
        component: NbaScoreBoxComponent
      },
      {
        path:'nbaPlayers',
        component: NbaplayersComponent
      },
      {
        path:'buscar/:txtBuscar',
        component: BuscarComponent
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
export class MynbaRoutingModule { }
