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

  PLAYER!: string ; //revisar si hace falta, creo que no..
    


  listaFAs! : MyPlayer[];

  
  public page : number = 0;

  
 displayedColumns: string[] = ['PUJAR', 'POS', 'PLAYER', 'SALARIO', 'YEARS','EQUIPO' ];

 dataSource = new MatTableDataSource(this.listaFAs);


  constructor (private infogmS : InfogmService){}


  ngOnInit() {

    this.infogmS.getFA()            
        .subscribe( resp => {
        this.listaFAs = resp;                  
})
  }

  nextPage(){

    if(this.page< this.listaFAs.length-5){
      this.page += 5;
    }
    
  }

  prevPage(){
    if(this.page > 0){
      this.page -= 5;
    }
  
  }
}
