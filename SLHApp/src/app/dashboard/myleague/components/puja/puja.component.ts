import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { MyNews } from 'src/app/dashboard/interfaces/MyNews.interface';
import { MyPujaTiny2 } from 'src/app/dashboard/interfaces/MyPujaTiny.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';

@Component({
  selector: 'app-puja',
  templateUrl: './puja.component.html',
  styleUrls: ['./puja.component.css']
})
export class PujaComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private infogmS: InfogmService,
    private authservice: AuthService,
    private route: ActivatedRoute) { }


  pujaFAForm: FormGroup = this.fb.group({

    salarioOffer: ['2', [Validators.required, Validators.min(1), Validators.max(30)]],
    years: ['3', [Validators.required, Validators.min(1), Validators.max(3)]],
  })

  gminfo!: MyGM;

  pujaNew!: MyPujaTiny2[];

  PLAYER!: string;
  TEAM!: string;

  EQUIPOOffer!: string;
  pujaForm!: MyPujaTiny2;
  pujaFormData: boolean = false;
  infopuja: boolean = false;

  desde!: Date;

  mySLHnews: MyNews[] = [];

  ngOnInit() {

    let selectedPlayer: string | null = this.route.snapshot.paramMap.get("PLAYER");
    this.PLAYER = selectedPlayer!;



    //TRAER INFO DEL EQUIPO

    const email = this.authservice.user.email;

    this.infogmS.getInfoGmByEmail(email!)
      .subscribe(resp => {
        this.EQUIPOOffer = resp.EQUIPO!;
        this.TEAM = resp.AKA!;
      })

    if (this.PLAYER || this.EQUIPOOffer) { this.pujaFormData = true };


  }


  pujar() {


    let date: Date = new Date();


    const pujaNew2: MyPujaTiny2 = {

      PLAYER: this.PLAYER,
      TEAM: this.TEAM,
      SALARIO: this.pujaFAForm.value.salarioOffer,
      YEARS: this.pujaFAForm.value.years,
      TIPO: "Jugador",
    }

    this.pujaForm = pujaNew2;

    if (this.pujaForm) { this.infopuja = true; }


    const mySLHNews: MyNews = {

      PLAYER: this.PLAYER,
      AKA: this.TEAM,
      EQUIPO: this.EQUIPOOffer,
      SALARIO: this.pujaFAForm.value.salarioOffer,
      YEARS: this.pujaFAForm.value.years,
      desde: date,
      fichadoCortado: true
    }

    this.mySLHnews.push(mySLHNews);



    this.guardarPuja();
    this.guardarSLHNews();


  } // END OF PUJA     

  guardarSLHNews() {


    const PLAYER = this.PLAYER;
    const AKA = this.TEAM;
    const EQUIPO = this.EQUIPOOffer;
    const SALARIO = this.pujaForm.SALARIO;
    const YEARS = this.pujaForm.YEARS;
    const desde = new Date();
    const fichadoCortado = true;


    this.infogmS.putSLHNews(PLAYER, AKA, EQUIPO, SALARIO, YEARS, desde, fichadoCortado)
      .subscribe(resp => {
        this.mySLHnews
      })

  }



  guardarPuja() {

    const PLAYER = this.PLAYER;
    const TEAM = this.TEAM;
    const SALARIO = this.pujaForm.SALARIO;
    const YEARS = this.pujaForm.YEARS;
    const TIPO = "Jugador";


    this.infogmS.putFA(PLAYER, TEAM, SALARIO, YEARS, TIPO)
      .subscribe(resp => {
        this.pujaForm

      })

  }

  droparPlayer() {


    const PLAYER = this.PLAYER;
    const TEAM = "F.A";
    const SALARIO = 0;
    const YEARS = 0;
    const TIPO = "Jugador";


    this.infogmS.putFA(PLAYER, TEAM, SALARIO, YEARS, TIPO)
      .subscribe(resp => {
        this.pujaForm
      })

  }

  openInfo() {

    this.pujaFormData = true;

  }

  camposNoValidos(campo: string) {

    return this.pujaFAForm.controls[campo].errors &&
      this.pujaFAForm.controls[campo].touched;
  }
}
