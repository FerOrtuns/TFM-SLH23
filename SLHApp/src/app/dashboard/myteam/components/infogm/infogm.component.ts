import { Component, OnInit } from '@angular/core';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { InfogmService } from '../../../services/infogm.service';

@Component({
  selector: 'app-infogm',
  templateUrl: './infogm.component.html',
  styles: [
  ]
})
export class InfogmComponent implements OnInit {

idGM! : number;

gminfo!: MyGM ;

loaded!: boolean;


constructor ( private infogmS : InfogmService) {}

  ngOnInit() {

    this.infogmS.getInfoGM(this.idGM)
                .subscribe( resp => {
                  this.gminfo = resp;
                  console.log('resp', resp, this.loaded)
                  this.loaded = true;
                  console.log('loaded',this.loaded)
                })

  }



}
