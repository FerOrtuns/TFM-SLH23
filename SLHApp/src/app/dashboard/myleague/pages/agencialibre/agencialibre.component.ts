import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';

@Component({
  selector: 'app-agencialibre',
  templateUrl: './agencialibre.component.html',
  styleUrls: ['./agencialibre.component.css']
})
export class AgencialibreComponent implements OnInit {

  listaFAs! : MyPlayer[];

  
 displayedColumns: string[] = ['TIPO', 'POS', 'PLAYER', 'SALARIO', 'YEARS', 'OPT' ];

 dataSource = new MatTableDataSource(this.listaFAs);


  constructor (private infogmS : InfogmService){}


  ngOnInit() {

    this.infogmS.getFA()            
        .subscribe( resp => {
        this.listaFAs = resp;                  
})
  }

}
