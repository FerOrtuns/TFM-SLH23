import { Component, OnInit } from '@angular/core';
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

 
 /*  miForm : FormGroup = new FormGroup({

    filter: new FormControl()
  }); */


  myroster!: MyPlayer[] ;
  gminfoT!: MyGM ;
  PLAYER!: string;
  validDrop: boolean = false;
  
/*   loaded: boolean = false;

  if (gminfoT && myroster){this.loaded = true;}; */

  
displayedColumns: string[] = ['TIPO', 'POS', 'PLAYER', 'SALARIO', 'YEARS', 'OPT', 'DROP' ];

dataSource = new MatTableDataSource(this.myroster);


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

     droparPlayer(PLAYER:string) {

      /* 
    let PLAYER  = this.route.snapshot.paramMap.get("PLAYER");
 */
      /* 
    let SALARIOM  = this.route.snapshot.paramMap.get(SALARIO); */
/* 
            console.log('SALARIOM', SALARIOM);

            if (SALARIOM! > 2 ){return} */
        /* 
            const PLAYER = this.PLAYER; */
            const TEAM = "F.A";
            const SALARIO = 0;
            const YEARS = 0;
            const TIPO = "Jugador";
        
            console.log(PLAYER,'PLAYER');
            console.log(TEAM,'TEAM');
            console.log(SALARIO,'SALARIO');
            console.log(YEARS,'YEARS');
            console.log(TIPO,'TIPO');
            
            
            
        
            this.infogmS.putFA(PLAYER, TEAM, SALARIO, YEARS, TIPO )
                        .subscribe( resp => {
                         /*  this.pujaForm */
                          
                        })
                      
                    }
};