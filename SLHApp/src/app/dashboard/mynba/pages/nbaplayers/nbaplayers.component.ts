import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

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
  

    historial : string [] = [];
    
    playersFound: Apiplayers[]=[];


    allPlayersInfo! : Apiplayers[];
    dataSource!     : Apiplayers[];
    
  
    constructor (private sapi: SearchApiService){

      if(localStorage.getItem('historial')){
        this.historial= JSON.parse( localStorage.getItem('historial')!);
      }
    }

    ngOnInit() {

      this.sapi.buscarAllPlayersInfo()
      .subscribe ( (resp: Apiplayers[]) => {
/*         console.log(resp); */
        this.allPlayersInfo = resp;
        
        this.dataSource =this.allPlayersInfo
      })

      
    }

  
    buscar(query:string=''){
  
      let valor = this.txtBuscar.nativeElement.value;

      if( !this.historial.includes(valor.trim().toLocaleLowerCase()) ) {

        this.historial.unshift(valor);
    
        this.historial = this.historial.splice(0,7);

        localStorage.setItem('historial', JSON.stringify(this.historial))
  
      if( valor.trim().length === 0){return;}

      valor = valor.trim().toLocaleLowerCase();

       }
    
      
      let matchnumber: number=0

      this.playersFound = [];

      this.allPlayersInfo.forEach(element => {
        
        
        const busqueda = element.YahooName.trim().toLocaleLowerCase();
        

        if(busqueda.includes(valor)){
         
          matchnumber = matchnumber+1;

          this.playersFound.unshift(element);

          }
            
      });

      
      if(matchnumber === 0){ return console.log('no match found tio');}

      if(this.playersFound.length === 0){
        this.dataSource =this.allPlayersInfo
      }else{
        this.dataSource= this.playersFound;
      }

      
      this.txtBuscar.nativeElement.value = '';
  
    }
    nextPage(){
  
      if(this.page< this.dataSource.length-4){
        this.page += 4;
      }
      
    }
  
    prevPage(){
      if(this.page > 0){
        this.page -= 4;
      }
    
    }

    
    buscarH(termino:string){

      console.log(termino,'termino');

      let valor = termino;
      
      if( valor.trim().length === 0){return;}

      valor = valor.trim().toLocaleLowerCase();

       
      let matchnumber: number=0

      this.playersFound = [];

      this.allPlayersInfo.forEach(element => {
        
        
        const busqueda = element.YahooName.trim().toLocaleLowerCase();
        

        if(busqueda.includes(valor)){
         
          matchnumber = matchnumber+1;

          this.playersFound.unshift(element);

          }
            
      });

      
      if(matchnumber === 0){ return console.log('no match found tio');}

      if(this.playersFound.length === 0){
        this.dataSource =this.allPlayersInfo
      }else{
        this.dataSource= this.playersFound;
      }

    }
}
