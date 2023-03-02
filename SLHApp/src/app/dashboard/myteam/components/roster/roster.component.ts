import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { dataRoster } from 'src/app/dashboard/interfaces/dataRoster.interface';
import { MyPlayer, MyRoster } from 'src/app/dashboard/interfaces/Myroster.interface';

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


  miForm : FormGroup = new FormGroup({

    filter: new FormControl('buscar')
  });

  AKA!: string ;

  myroster!: MyRoster ;
/*   roster!: string [];
 */  
  roster  = (this.myroster.myRoster).forEach(element=> this.plantilla.push(element));

 
  plantilla!: dataRoster [];

 ELEMENT_DATA: dataRoster[] = this.plantilla;

  
 displayedColumns: string[] = ['Tipo', 'Pos', 'Nombre', 'Salario', 'Años', 'Opt' ];
 dataSource = new MatTableDataSource(this.ELEMENT_DATA);


 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }


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
                  console.log(this.plantilla);
/*                   console.log('myroster',this.myroster);
 *//*                   console.log('plantilla',this.plantilla);
 */                  
                })
                
                
  }


  

}