import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';

import { InfogmService } from 'src/app/dashboard/services/infogm.service';
import { MyGM } from '../../../interfaces/MyGM.interface';
import { Team } from '../../../interfaces/MyPlayer.interface';

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
.mypTIPO{
    border-right: 1px solid currentColor;
    background: #334455;
}
.mypTIPO2{
    border-right: 1px solid currentColor;
    text-align: center;
    
}
.mypTIPO3{
    text-align: center;
    background-color: #334455;
    color: #e70768;
    font-size: x-large;
}
.mypNONMBRE{
    background: #334455;
    color: #e70768;
    font-size: x-large;
}
`
  ]
})




export class RosterComponent  implements OnInit {

 /*  @Input() gminfo!: MyGM; */

 /*  miForm : FormGroup = new FormGroup({

    filter: new FormControl()
  }); */

  AKA!: string;
  myroster!: MyPlayer[] ;
/* 
  AKA: string = this.myroster.TEAM;
 */
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

  constructor ( private infogmS : InfogmService,
                private route: ActivatedRoute) {}

  ngOnInit() {

    let AKA  = this.route.snapshot.paramMap.get("AKA");
    
    this.infogmS.getRoster(AKA!)
                .subscribe( resp => {
                  this.myroster = resp;

                  
                })
          }
};