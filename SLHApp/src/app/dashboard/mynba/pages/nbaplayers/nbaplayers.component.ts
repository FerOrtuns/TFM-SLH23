import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

    PLAYERselected!: string;

    allPlayersInfo! : Apiplayers[];
    dataSource!     : Apiplayers[];
    
  
    constructor (private sapi: SearchApiService,
                 private route: ActivatedRoute){

      if(localStorage.getItem('historial')){
        this.historial= JSON.parse( localStorage.getItem('historial')!);
      }
    }

    ngOnInit() {

      
    let selectedPlayer: string | null = this.route.snapshot.paramMap.get("Name");
    this.PLAYERselected = selectedPlayer!; 

    this.sapi.buscarAllPlayersInfo()
    .subscribe ( (resp: Apiplayers[]) => {

      this.allPlayersInfo = resp;
    
      if(!selectedPlayer){
        
        this.dataSource =resp;


      }

    else{

      let valor = selectedPlayer;
      
      if( valor.trim().length === 0){return;}

      valor = valor.trim().toLocaleLowerCase();

       
      let matchnumber: number=0

      this.playersFound = [];

      this.allPlayersInfo.forEach(element => {
        
        
        let busqueda = element.YahooName.trim().toLocaleLowerCase();
        

        if(busqueda.includes(valor)){
         
          matchnumber = matchnumber+1;

          this.playersFound.unshift(element);

          this.dataSource = this.playersFound;

          }
            
      });

      
      if(matchnumber === 0){ return console.log('no match found tio');}

      if(this.playersFound.length === 0){
        this.dataSource =this.allPlayersInfo
      }else{
        this.dataSource= this.playersFound;
      }

    }
    
    })

    

      

      
    }

  
    buscar(query:string=''){
  
      let valor = this.txtBuscar.nativeElement.value;

      

      if( !this.historial.includes(valor.trim().toLocaleLowerCase()) ) {



        if( valor.trim().length === 0){return;}

        this.historial.unshift(valor);
    
        this.historial = this.historial.splice(0,7);

        localStorage.setItem('historial', JSON.stringify(this.historial))
  

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
