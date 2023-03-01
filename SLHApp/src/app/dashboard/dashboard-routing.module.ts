import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'myleague',
    loadChildren: ()=> import ('../dashboard/myleague/myleague.module').then (m => m.MyleagueModule)
  },
  {
    path:'mynba',
    loadChildren: ()=> import ('../dashboard/mynba/mynba.module').then (m => m.MynbaModule)
  },
  {
    path:'myteam',
    loadChildren: ()=> import ('../dashboard/myteam/myteam.module').then (m => m.MyteamModule)
  },
  {
    path:'**', redirectTo: 'HomeComponent'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
