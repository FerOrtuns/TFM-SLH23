import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';
@Component({
  selector: 'app-agencialibre',
  templateUrl: './agencialibre.component.html',
  styleUrls: ['./agencialibre.component.css']
})
export class AgencialibreComponent implements OnInit {

  
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; 

  PLAYER!: string ; //revisar si hace falta, creo que no..
  playersFound: MyPlayer[]=[];
  dataSources: MyPlayer[]=[];


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

  buscar(query:string=''){
  
    
    let valor = this.txtBuscar.nativeElement.value;
      
    if( valor.trim().length === 0){return;}

    valor = valor.trim().toLocaleLowerCase();

     
    let matchnumber: number=0

    this.playersFound = [];

    this.listaFAs.forEach(element => {
      
      
      const busqueda = element.PLAYER!.trim().toLocaleLowerCase();
      

      if(busqueda.includes(valor)){
       
        matchnumber = matchnumber+1;

        this.playersFound.unshift(element);

        }
          
    });

    
    if(matchnumber === 0){ return console.log('no match found tio');}

    if(this.playersFound.length === 0){
      this.dataSources =this.listaFAs;
    }else{
      this.dataSources= this.playersFound;
    }

    
    this.txtBuscar.nativeElement.value = '';

  }
}
