import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';

import { InfogmService } from 'src/app/dashboard/services/infogm.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
  
})



export class RosterComponent  implements OnInit {

/*   @Input() equiposinfo!: MyGM;
 */
 /*  miForm : FormGroup = new FormGroup({

    filter: new FormControl()
  }); */

  /* AKA!: string; */
  myroster!: MyPlayer[] ;
  gminfoT!: MyGM ;

  
/*   loaded: boolean = false;

  if (gminfoT && myroster){this.loaded = true;}; */


/* 
  AKA: string = this.myroster.TEAM;
 */
/* 

ELEMENT_DATA: MyPlayer[] = []; */

  
/* Equipo: string = this.gminfo.EQUIPO!;
 */  
 displayedColumns: string[] = ['TIPO', 'POS', 'PLAYER', 'SALARIO', 'YEARS', 'OPT' ];

/*  dataSource = this.myroster;
 */ dataSource = new MatTableDataSource(this.myroster);


/*  applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase(); 
   
 }
*/

  constructor ( private infogmS : InfogmService,
                private route: ActivatedRoute) {}

  ngOnInit() {

    let AKA  = this.route.snapshot.paramMap.get("AKA");
    
    this.infogmS.getRoster(AKA!)
                .subscribe( resp => {
                  this.myroster = resp;                  
                })
                
                
    this.infogmS.getInfoGMByAKA(AKA!)
                .subscribe(resp=> {
                  this.gminfoT = resp;
                })

   
          }
};