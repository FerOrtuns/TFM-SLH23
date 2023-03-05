import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';

import { InfogmService } from 'src/app/dashboard/services/infogm.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styles: [
    `
table {
  width: 100%;
}

.mat-mdc-form-field {
  font-size: 14px;
  width: 100%;
}
`
  ]
})




export class RosterComponent  implements OnInit {


 /*  miForm : FormGroup = new FormGroup({

    filter: new FormControl()
  }); */

  AKA!: string ;

  myroster!: MyPlayer[] ;

/* 
  ELEMENT_DATA: MyPlayer[] = []; */

  
  
 displayedColumns: string[] = ['TIPO', 'POS', 'PLAYER', 'SALARIO', 'YEARS', 'OPT' ];

/*  dataSource = this.myroster;
 */ dataSource = new MatTableDataSource(this.myroster);


/*  applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase(); 
   
 }
*/

  constructor ( private infogmS : InfogmService) {}

  ngOnInit() {
    
    this.infogmS.getRoster(this.AKA)
                .subscribe( resp => {
                  this.myroster = resp;

                     /* this.roster.push(i[]); */
                  
/*                   this.plantilla.push(this.myroster.myRoster!);
 *//*                  this.roster =  JSON.stringify(resp);

 */

/*                     this.roster = resp;
 *//* 
                 this.roster =  JSON.stringify(this.myroster);
                 this.plantilla =  JSON.stringify(this.roster); */


 /*                  
 */                  console.log(this.myroster);
/*                   console.log(this.plantilla);
 *//*                   console.log('myroster',this.myroster);
 *//*                   console.log('plantilla',this.plantilla);
 */                  
                })
                
                
  }


  

}