import { Component, OnInit } from '@angular/core';
import { dbGM } from 'src/app/dashboard/interfaces/dbgm.interface';
import { InfogmService } from '../../../services/infogm.service';

@Component({
  selector: 'app-infogm',
  templateUrl: './infogm.component.html',
  styles: [
  ]
})
export class InfogmComponent implements OnInit {

idGM! : number; 

gminfo!: dbGM ;
/* 
logosrc: string = this.gminfo.dbGM[0].alt_img!; */



constructor ( private infogmS : InfogmService) {}

  ngOnInit() {
    
    this.infogmS.getInfoGM(this.idGM)
                .subscribe( resp => {
                  this.gminfo = resp;
                })
                
  }

}
