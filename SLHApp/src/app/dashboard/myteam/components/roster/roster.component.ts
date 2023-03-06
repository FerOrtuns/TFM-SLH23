import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';

import { InfogmService } from 'src/app/dashboard/services/infogm.service';
import { MyGM } from '../../../interfaces/MyGM.interface';

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
    color: pink;
    font-size: x-large;
}
.mypNONMBRE{
    background: #334455;
    color: pink;
    font-size: x-large;
}
`
  ]
})




export class RosterComponent  implements OnInit {

  @Input() gminfo!: MyGM;

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
                })
          }
};