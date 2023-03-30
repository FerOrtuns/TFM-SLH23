import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equiposinfo!: MyGM [];

  AKA! : string ;
  

 /*  myaka(element: MyGM){


  this.AKA = element.AKA;

  window.location.href = "/dashboard/myteam/player/"+this.AKA;  
 
  }; */

  dataSource = new MatTableDataSource(this.equiposinfo);

  displayedColumns: string[] = [ 'Roster', 'alt_img', 'Nickname', 'JUGADORES', 'Salarios', 'SalarioLibre', 'Mail2' ];
  
  
  constructor ( private infogmS : InfogmService,
                private router: Router) {}
  
    ngOnInit() {
      
      this.infogmS.getInfoGMS()
                  .subscribe( resp => {

                    this.equiposinfo=resp;
                    
                /*     let equiposinfo!: MyGM [];

                    resp.forEach(element => {
                      
                      if(element.EQUIPO === ''){return }
                      else{ this.equiposinfo.push(element)}

                    }); */
/*                     this.equiposinfo = resp;
 */                          
                 })               
    }

    /* navtoroster(){

      this.AKA = 'LAC';
      this.router.navigateByUrl("['/dashboard/myteam/players', this.AKA]");
     
    } */
}
