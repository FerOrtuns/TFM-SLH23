import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';
import { InfogmService } from '../../../services/infogm.service';


@Component({
  selector: 'app-infogm',
  templateUrl: './infogm.component.html',
  styles: [
  ]
})
export class InfogmComponent implements OnInit {

  gminfo!: MyGM;
  showrosterb: boolean = false;
  myroster!: MyPlayer[];
  PLAYER!: string;
  validDrop: boolean = false;
  isMyTeam: boolean = false;
  myAKA!: string;
  TotalSalarios: number = 0;
  TotalJugadores: number = 0;
  TotalRondas: number = 0;
  TotalDerechos: number = 0;
  SalarioLibre: number=0;



  displayedColumns: string[] = ['TIPO', 'POS', 'PLAYER', 'SALARIO', 'YEARS', 'OPT', 'DROP'];

  dataSource = new MatTableDataSource(this.myroster);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


  }


  constructor(private infogmS: InfogmService,
    private authservice: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    const email = this.authservice.user.email;

    this.infogmS.getInfoGmByEmail(email!)
      .subscribe(resp => {

        this.myAKA = resp.AKA;
        this.gminfo = resp;

        let aka = resp.AKA;

        

        this.infogmS.getRoster(aka!)
        .subscribe(resp => {
          this.myroster = resp;
  
          resp.forEach(element => {
  
            this.TotalSalarios += element.SALARIO || 0;
  
            if (element.TIPO === 'Jugador') { this.TotalJugadores = this.TotalJugadores + 1 }
            if (element.TIPO === 'Derecho') { this.TotalDerechos = this.TotalDerechos + 1 }
            if (element.TIPO === 'Ronda') { this.TotalRondas = this.TotalRondas + 1 }
  
  
          });
  
          
            this.SalarioLibre= 130-this.TotalSalarios;

        })
  


      })


    
  }

  showroster() {

    this.showrosterb = true;
  }
}


