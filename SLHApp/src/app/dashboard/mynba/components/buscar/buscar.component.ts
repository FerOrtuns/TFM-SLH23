import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apiplayers } from 'src/app/dashboard/interfaces/Apiplayers.interface';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {


  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; 
/* 
  @Input() playerFound!  : Apiplayers[];
  @Input() allPlayersInfo! : Apiplayers[]; */
   
    
    public page : number = 0;
  
    playerFound!: Apiplayers[];
    playerFounded!: string;
/* 
    allPlayersInfo! : Apiplayers[]; */
  
    constructor (private sapi: SearchApiService,
                 private route: ActivatedRoute,
                 private router: Router,){}

    ngOnInit() {

      let selectedPlayer: string | null = this.route.snapshot.paramMap.get('txtBuscar');
    /*   this.playerFounded = selectedPlayer!;

      console.log(this.playerFound,'plyaerfound'); */
      
      console.log('txt',this.txtBuscar);
      

   /*    this.sapi.buscarAllPlayersInfo()
      .subscribe ( (resp: Apiplayers[]) => {
        console.log(resp);
        this.allPlayersInfo = resp;
        
      }) */

    }

    nextPage(){
  
      if(this.page< this.playerFound.length-4){
        this.page += 4;
      }
      
    }
  
    prevPage(){
      if(this.page > 0){
        this.page -= 4;
      }
    
    }
  
   /*  get resPlayer()  {
      
      return this.sapi.resPlayers; 
    } */
  
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
  /* 
       this.playerFound = plFounded!; */
      
      console.log(this.playerFound);

      
      this.router.navigateByUrl('/dashboard/mynba/buscar');
      
      this.txtBuscar.nativeElement.value = '';
  
    }
  

}
