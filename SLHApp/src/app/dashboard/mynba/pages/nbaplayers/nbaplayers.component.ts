import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { PlayerMatch } from 'src/app/dashboard/interfaces/ApiPlayerFound.interface';
import { Apiplayers } from 'src/app/dashboard/interfaces/Apiplayers.interface';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';

@Component({
  selector: 'app-nbaplayers',
  templateUrl: './nbaplayers.component.html',
  styleUrls: ['./nbaplayers.component.css']
})
export class NbaplayersComponent implements OnInit{
  
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; 
   
    
    public page : number = 0;
  
    playerFound!: PlayerMatch;

    allPlayersInfo! : Apiplayers[];
  
    constructor (private sapi: SearchApiService){}

    ngOnInit() {

      this.sapi.buscarAllPlayersInfo()
      .subscribe ( (resp: Apiplayers[]) => {
        console.log(resp);
        this.allPlayersInfo = resp;
        
      })

    }
  
    get resPlayer()  {
      
      return this.sapi.resPlayers; 
    }
  
    /* displayedColumns: string[] = ['PUJAR', 'POS', 'PLAYER', 'SALARIO', 'YEARS','EQUIPO', 'TIMELINE' ];
  
    dataSource = new MatTableDataSource(this.resPlayer); */
   
  /* 
    dataSource: boolean = true; */
  
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
  
      if(this.page< this.allPlayersInfo.length-4){
        this.page += 4;
      }
      
    }
  
    prevPage(){
      if(this.page > 0){
        this.page -= 4;
      }
    
    }
}
