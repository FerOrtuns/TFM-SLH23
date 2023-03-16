import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbahomeComponent } from './pages/nbahome/nbahome.component';
import { NbastatsrefComponent } from './pages/nbastatsref/nbastatsref.component';

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
