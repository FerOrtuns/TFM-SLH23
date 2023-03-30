import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
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



  displayedColumns: string[] = ['TIPO', 'POS', 'PLAYER', 'SALARIO', 'YEARS', 'OPT', 'DROP'];

  dataSource = new MatTableDataSource(this.myroster);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


  }


  constructor(private infogmS: InfogmService,
    private route: ActivatedRoute,
    private authservice: AuthService) { }

  ngOnInit() {



    let AKA = this.route.snapshot.paramMap.get("AKA");

    


    this.infogmS.getRoster(AKA!)
      .subscribe(resp => {
        this.myroster = resp;

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

        if (AKA === this.myAKA) { this.isMyTeam = true; }


      })
  }

  droparPlayer(PLAYER: string) {

    const TEAM = "F.A";
    const SALARIO = 0;
    const YEARS = 0;
    const TIPO = "Jugador";


    this.infogmS.putFA(PLAYER, TEAM, SALARIO, YEARS, TIPO)
      .subscribe(resp => {
        /*  this.pujaForm */

      })

    window.location.reload();
  }
};