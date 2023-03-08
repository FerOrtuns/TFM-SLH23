import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  
/*   search: string = this.equiposinfo.forEach((AKA)=>{

      if (this.equiposinfo.aka)
      return AKA
  }) */


  myaka(element: MyGM){
/* 
 element.innerText(); */

  this.AKA = element.AKA;

  window.location.href = "/dashboard/myteam/player/"+this.AKA;  

    /* 
     */
    
  };

  dataSource = new MatTableDataSource(this.equiposinfo);

  displayedColumns: string[] = [ 'Roster', 'alt_img', 'Nickname', 'JUGADORES', 'Salarios', 'SalarioLibre', 'Mail2' ];
  
  
  constructor ( private infogmS : InfogmService) {}
  
    ngOnInit() {
      
      this.infogmS.getInfoGMS()
                  .subscribe( resp => {
                    this.equiposinfo = resp;
                    
                  })
                  
    }

}
