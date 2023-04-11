import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { MyNews } from 'src/app/dashboard/interfaces/MyNews.interface';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';

import { InfogmService } from 'src/app/dashboard/services/infogm.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']

})



export class RosterComponent implements OnInit {


  myroster!: MyPlayer[];
  gminfoT!: MyGM;
  gminfo!: MyGM;
  PLAYER!: string;
  validDrop: boolean = false;
  isMyTeam: boolean = false;
  myAKA!: string;
  TotalSalarios: number = 0;
  TotalJugadores: number = 0;
  TotalRondas: number = 0;
  TotalDerechos: number = 0;
  desde!:  Date ;
  EQUIPO: string = '';
  mySLHnews: MyNews[] = [];
  dataSource!: any;
  



  displayedColumns: string[] = ['TIPO', 'POS', 'PLAYER', 'SALARIO', 'YEARS', 'OPT', 'DROP'];



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    console.log(filterValue,'fv');

  }


  constructor(private infogmS: InfogmService,
    private route: ActivatedRoute,
    private authservice: AuthService) { }

  ngOnInit() {



    let AKA = this.route.snapshot.paramMap.get("AKA");

    


    this.infogmS.getRoster(AKA!)
      .subscribe(resp => {
        this.myroster = resp;

        this.dataSource = new MatTableDataSource(this.myroster);    

        
        resp.forEach(element => {

          this.TotalSalarios += element.SALARIO || 0;

          if (element.TIPO === 'Jugador') { this.TotalJugadores = this.TotalJugadores + 1 }
          if (element.TIPO === 'Derecho') { this.TotalDerechos = this.TotalDerechos + 1 }
          if (element.TIPO === 'Ronda') { this.TotalRondas = this.TotalRondas + 1 }


        });


      })


    this.infogmS.getInfoGMByAKA(AKA!)
      .subscribe(resp => {
        this.gminfoT = resp;

      })


    const email = this.authservice.user.email;

    this.infogmS.getInfoGmByEmail(email!)
      .subscribe(resp => {

        this.myAKA = resp.AKA;
        this.EQUIPO = resp.EQUIPO || '';

        if (AKA === this.myAKA) { this.isMyTeam = true; }


      })
  
  }

  droparPlayer(PLAYER: string, SALARIOanterior: number, years: number) {

    const TEAM = "F.A";
    const SALARIO = 0;
    const YEARS = 0;
    const TIPO = "Jugador";


    this.infogmS.putFA(PLAYER, TEAM, SALARIO, YEARS, TIPO)
      .subscribe(resp => {
        /*  this.pujaForm */

      })

     
      this.guardarSLHNewsCorte(PLAYER, SALARIOanterior, years);

    window.location.reload();
  }

  guardarSLHNewsCorte(PLAYER: string, SALARIO: number, YEARS: number){

    
    const AKA = this.myAKA;
    const EQUIPO = this.EQUIPO || '';
    
    const desde = new Date();
    const fichadoCortado = false; 
  
  
    console.log(PLAYER,'PLAYER');
    console.log(AKA,'TEAM');
    console.log(EQUIPO,'TEAM');
    console.log(SALARIO,'SALARIO');
    console.log(YEARS,'YEARS');
    console.log(desde,'desde');
    console.log(fichadoCortado,'fichadoCortado');
  
  
    this.infogmS.putSLHNews(PLAYER, AKA, EQUIPO, SALARIO, YEARS, desde, fichadoCortado)
    .subscribe (resp => {
      this.mySLHnews
    })
  
  }
};

