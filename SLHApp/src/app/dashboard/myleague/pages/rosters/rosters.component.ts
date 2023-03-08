import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';

@Component({
  selector: 'app-rosters',
  templateUrl: './rosters.component.html',
  styleUrls: ['./rosters.component.css']
})
export class RostersComponent implements OnInit {

  
@Input() equiposinfo!: MyGM [];

  AKA!: string ;
/*   aka: string = this.equiposinfo


  i: number = this.equiposinfo.indexOf('$event'); */


  myroster!: MyPlayer[] ;

  displayedColumns: string[] = ['TIPO', 'POS', 'PLAYER', 'SALARIO', 'YEARS', 'OPT' ];

  dataSource = new MatTableDataSource(this.myroster);

/*  for(let: any item: any of: any equiposinfo: any){
console.log(item);

 } */

/*   this.AKA = this.equiposinfo[].TEAM;

 */

  
constructor ( private infogmS : InfogmService,
              private route: ActivatedRoute) {}

  ngOnInit() {

    console.log('antes de aka');

    let AKA  = this.route.snapshot.paramMap.get("AKA");

    console.log('AKA',AKA);
    
    
    this.infogmS.getRoster(AKA!)
                .subscribe( resp => {
                  this.myroster = resp;

                   console.log(this.myroster); 
                  
                })
          }
}
