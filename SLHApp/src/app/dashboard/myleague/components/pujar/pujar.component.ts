import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyPuja } from 'src/app/dashboard/interfaces/MyPuja.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';
import { MyFecha } from '../../../interfaces/MyFecha.interface';
import { MyGM } from '../../../interfaces/MyGM.interface';
import { PujaFAComponent } from '../puja-fa/puja-fa.component';


const countdown = require('countdown')


@Component({
  selector: 'app-pujar',
  templateUrl: './pujar.component.html',
  styleUrls: ['./pujar.component.css']
})
export class PujarComponent implements OnInit{


  @Output()  pujaForm!: MyPuja;



  constructor (private route: ActivatedRoute,
               private fb: FormBuilder,
               private infogmS : InfogmService,
               private authservice : AuthService,
               private _bottomSheet: MatBottomSheet) {}

  pujaFAForm : FormGroup = this.fb.group({
    
    salarioOffer: ['2',[Validators.required, Validators.min(1), Validators.max(30)]],
    years: ['3',[Validators.required, Validators.min(1), Validators.max(3)]],
  })

  /* @Input()  EQUIPO!: string; */

  gminfo!: MyGM;

  pujaNew!: MyPuja[];


  data: boolean = false;
  dataPuja: boolean = false;

  PLAYER!: string ;

  EQUIPOOffer!: string;

  
 displayedColumns: string[] = ['PLAYER', 'SALARIO', 'YEARS','EQUIPO', 'STARTTIME', 'ENDTIME' ];

 dataSource = new MatTableDataSource(this.pujaNew);


  startDate!: MyFecha ;
  endDate!: MyFecha ;
  mesS!: string;

  ngOnInit() {

    let selectedPlayer: string | null = this.route.snapshot.paramMap.get("PLAYER");
    this.PLAYER = selectedPlayer!; 

    

    //TRAER INFO DEL EQUIPO

    const email = this.authservice.user.email;

              this.infogmS.getInfoGmByEmail(email!)
                .subscribe( resp => {
                  this.gminfo = resp;
              this.EQUIPOOffer= resp.EQUIPO!;

                   })

/* 
console.log('equipo',this.gminfo.EQUIPO); */


   
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

    let pujaDeadTime : Date = date;
    let dateS: number = date.getDate();
    let dateE: number = dateS+2;
    pujaDeadTime.setDate(dateE);

    /* function countdown() : any (pujaDeadTime, ((ts: any)=>{
      console.log(ts);
      
    })) */

/*     console.log(countdown(pujaDeadTime));
 */    
    


const endDate : MyFecha = {

  dia: date.getDate(),
  mes: date.getMonth(),
  fullyear: date.getFullYear(),
  hora: date.getHours(),
  min: date.getMinutes(),
  sec: date.getSeconds(),
  mesS: getMes(mesN),
};
/* 
    let endDate: MyFecha = this.startDate; */
    let diaS : number = this.startDate.dia;

    
    endDate.dia = diaS+2;
    

    this.endDate= endDate;
    
    const pujaNew2 : MyPuja = {

      PLAYER:        this.PLAYER,
      
      EQUIPO:        this.EQUIPOOffer,
      SALARIO:        2,
      YEARS:          3,
      startTime:     this.startDate,
      endTime:       this.endDate,
      closed:        false
    }

    this.pujaForm = pujaNew2;

    
    
/* 
    this.pujaNew.startTime = this.startDate;
   this.pujaNew.endTime =  this.endDate;
   this.pujaNew.PLAYER = this.PLAYER;  */

console.log('infoP', pujaNew2);

if(this.pujaForm){ this.dataPuja = true;}

    this.openBottomSheet();

    this.guardarPuja();
    
  } // END OF PUJAR

  guardarPuja(){

    console.log('guardando puja', this.pujaFAForm.value);
    
    
  }

  openBottomSheet(): void {
    this._bottomSheet.open(PujaFAComponent);
  }

  camposNoValidos(campo:string){

    return this.pujaFAForm.controls[campo].errors &&
           this.pujaFAForm.controls[campo].touched; 
  }
}
/* function countdown(pujaDeadTime: Date) {

  console.log(countdown(pujaDeadTime));
  

} */

