import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MyRoster } from 'src/app/dashboard/interfaces/Myroster.interface';

import { InfogmService } from 'src/app/dashboard/services/infogm.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styles: [
  ]
})
export class RosterComponent  implements OnInit {



  AKA!: string ;

  myroster!: MyRoster ;
  plantilla!: string [];
  roster!: string [];
 /*  roster!: any ; */
/*   
 displayedColumns: string[] = ['Tipo', 'Pos', 'Nombre', 'Salario', 'Años', 'Opt' ];
 dataSource = new MatTableDataSource(this.myroster);

 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }
 */

  constructor ( private infogmS : InfogmService) {}

  ngOnInit() {
    
    this.infogmS.getRoster(this.AKA)
                .subscribe( resp => {
                  this.myroster = resp;
/* 
                  for(let item of this.myroster.myRoster){
                    this.plantilla.push(item.PLAYER!); */
/*                     this.roster.push(item[]);
 */                  
/*                   this.plantilla.push(this.myroster.myRoster!);
 *//*                  this.roster =  JSON.stringify(resp);

 */

/*                     this.roster = resp;
 *//* 
                 this.roster =  JSON.stringify(this.myroster);
                 this.plantilla =  JSON.stringify(this.roster); */


 /*                  
 */                 /*  console.log(this.myroster);
                  console.log(this.plantilla); */
/*                   console.log('myroster',this.myroster);
 *//*                   console.log('plantilla',this.plantilla);
 */                  
                })
                
                
  }


  

}