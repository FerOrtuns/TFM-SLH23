import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyPuja } from 'src/app/dashboard/interfaces/MyPuja.interface';
import { MyFecha } from '../../../interfaces/MyFecha.interface';


const countdown = require('countdown')


@Component({
  selector: 'app-pujar',
  templateUrl: './pujar.component.html',
  styleUrls: ['./pujar.component.css']
})
export class PujarComponent implements OnInit{

  constructor (private route: ActivatedRoute) {}

  pujaForm!: MyPuja;

  pujaNew!: MyPuja;

  data: boolean = false;

  PLAYER!: string ;


  startDate!: MyFecha ;
  endDate!: MyFecha ;
  mesS!: string;

  ngOnInit() {

    let selectedPlayer: string | null = this.route.snapshot.paramMap.get("PLAYER");
    this.PLAYER = selectedPlayer!; 

    
  if(this.PLAYER){ this.data = true;}
/* 

    this.pujaNew.PLAYER = this.PLAYER; */
    
    
    console.log('selecplayer', selectedPlayer);
  
/*     console.log('date', this.date); */

    

  }
 

  


  cancelar(){
    console.log('cancelar puja');
    
  }

  pujar(){
    
    console.log('pujar a bd');

    let date: Date = new Date();

    let mesN =  date.getMonth();
    
    function getMes (mes:number): string {

      let mesS : string = '';

      if(mesN === 0){ mesS = 'Enero'};
      if(mesN === 1){ mesS = 'Febrero'};
      if(mesN === 2){ mesS = 'Marzo'};
      if(mesN === 3){ mesS = 'Abril'};
      if(mesN === 4){ mesS = 'Mayo'};
      if(mesN === 5){ mesS = 'Junio'};
      if(mesN === 6){ mesS = 'Julio'};
      if(mesN === 7){ mesS = 'Agosto'};
      if(mesN === 8){ mesS = 'Septiembre'};
      if(mesN === 9){ mesS = 'Octubre'};
      if(mesN === 10){ mesS = 'Noviembre'};
      if(mesN === 11){ mesS = 'Diciembre'};

      return mesS;
    }

    const startDate : MyFecha = {

      dia: date.getDate(),
      mes: date.getMonth(),
      fullyear: date.getFullYear(),
      hora: date.getHours(),
      min: date.getMinutes(),
      sec: date.getSeconds(),
      mesS: getMes(mesN),
    };

    this.startDate = startDate;
    console.log('startDate', this.startDate);

    let pujaDeadTime : Date = date;
    let dateS: number = date.getDate();
    let dateE: number = dateS+2;
    pujaDeadTime.setDate(dateE);

    /* function countdown() : any (pujaDeadTime, ((ts: any)=>{
      console.log(ts);
      
    })) */

/*     console.log(countdown(pujaDeadTime));
 */    
    

    let endDate: MyFecha = this.startDate;
    let diaS : number = this.startDate.dia;
    endDate.dia = diaS+2;
   
    
/* 
    this.pujaNew.startTime = this.startDate;
   this.pujaNew.endTime =  this.endDate;
   this.pujaNew.PLAYER = this.PLAYER;  */
/* 
console.log('infoP', this.pujaNew); */

    
  }
}
/* function countdown(pujaDeadTime: Date) {

  console.log(countdown(pujaDeadTime));
  

} */

