import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerMatch } from 'src/app/dashboard/interfaces/ApiPlayerFound.interface';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';

/* 
import statsBRef from 'src/assets/dataJson/statsNBAReference'; */


@Component({
  selector: 'app-nbastatsref',
  templateUrl: './nbastatsref.component.html',
  styleUrls: ['./nbastatsref.component.css']
})
export class NbastatsrefComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; 
/* 
  sbr: any = statsBRef; */

  public page : number = 0;

  playerFound!: PlayerMatch;

  constructor (private sapi: SearchApiService){}

  get resPlayer()  {
    
    return this.sapi.resPlayers; 
  }

  /* displayedColumns: string[] = ['PUJAR', 'POS', 'PLAYER', 'SALARIO', 'YEARS','EQUIPO', 'TIMELINE' ];

  dataSource = new MatTableDataSource(this.resPlayer); */
 

  dataSource: boolean = true;

  get historial () {
    return this.sapi.historial;
  }


  buscar(query:string=''){

    const valor = this.txtBuscar.nativeElement.value;
    

    if( valor.trim().length === 0){return;}
    
     const plFounded = this.sapi.buscarPlayer(valor);

     this.playerFound = plFounded!;
    
    
    this.txtBuscar.nativeElement.value = '';

  }
  buscarAll(){

    const valor = this.txtBuscar.nativeElement.value;

    if( valor.trim().length === 0){return;}
    
    this.sapi.buscarPlayers();
    
    this.txtBuscar.nativeElement.value = '';

  }

  nextPage(){

    if(this.page< this.resPlayer.length-5){
      this.page += 5;
    }
    
  }

  prevPage(){
    if(this.page > 0){
      this.page -= 5;
    }
  
  }
}
