import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyFecha } from 'src/app/dashboard/interfaces/MyFecha.interface';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { MyPuja } from 'src/app/dashboard/interfaces/MyPuja.interface';
import { MyPujaTiny, MyPujaTiny2 } from 'src/app/dashboard/interfaces/MyPujaTiny.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';

@Component({
  selector: 'app-puja',
  templateUrl: './puja.component.html',
  styleUrls: ['./puja.component.css']
})
export class PujaComponent implements OnInit {

  constructor (private fb: FormBuilder,
               private infogmS : InfogmService,
               private authservice : AuthService,
               private route: ActivatedRoute) {}


  pujaFAForm : FormGroup = this.fb.group({
    
    salarioOffer: ['2',[Validators.required, Validators.min(1), Validators.max(30)]],
    years: ['3',[Validators.required, Validators.min(1), Validators.max(3)]],
  })

  gminfo!: MyGM;

  pujaNew!: MyPujaTiny2[];

  PLAYER!: string ;
  TEAM!: string;

  EQUIPOOffer!: string;
  pujaForm!: MyPujaTiny2;
  pujaFormData: boolean = false;
  infopuja : boolean = false;

  desde!:  Date ;

  ngOnInit() {

    let selectedPlayer: string | null = this.route.snapshot.paramMap.get("PLAYER");
    this.PLAYER = selectedPlayer!; 

    console.log(this.PLAYER,'PLAYER');
    

    //TRAER INFO DEL EQUIPO

    const email = this.authservice.user.email;

              this.infogmS.getInfoGmByEmail(email!)
                .subscribe( resp => {
                  /* this.gminfo = resp; */
              this.EQUIPOOffer= resp.EQUIPO!;
              this.TEAM = resp.AKA!;
/* 
              console.log(this.EQUIPOOffer,'euipoiofer'); */
                   })

      if(this.PLAYER || this.EQUIPOOffer) {this.pujaFormData=true};       // purque no es con && ???      

     
      
                  }//END OF NGONINIT

  cancelar(){
    console.log('cancelar puja');
            };
            
  
  pujar(){
    
              console.log('pujar a bd');
          
              let date: Date = new Date();
          
           
              
              const pujaNew2 : MyPujaTiny2 = {

                PLAYER:        this.PLAYER,
                TEAM:            this.TEAM, 
                SALARIO:        this.pujaFAForm.value.salarioOffer,
                YEARS:          this.pujaFAForm.value.years,
                TIPO :         "Jugador",
              }

              this.pujaForm = pujaNew2;
          
          console.log('infoP', pujaNew2);

          if(this.pujaForm){this.infopuja = true;}


   /*  this.openBottomSheet(); */

    this.guardarPuja();
          
              
            } // END OF PUJA     
            
  guardarPuja(){

    console.log('guardando puja', this.pujaFAForm.value);

    const PLAYER = this.PLAYER;
    const TEAM = this.TEAM;
    const SALARIO = this.pujaForm.SALARIO;
    const YEARS = this.pujaForm.YEARS;
    const TIPO = "Jugador";

    console.log(PLAYER,'PLAYER');
    console.log(TEAM,'TEAM');
    console.log(SALARIO,'SALARIO');
    console.log(YEARS,'YEARS');
    console.log(TIPO,'TIPO');
    
    

    this.infogmS.putFA(PLAYER, TEAM, SALARIO, YEARS, TIPO )
                .subscribe( resp => {
                  this.pujaForm
                  console.log('aqui probando');
                  
                })
              
            }

            openInfo(){

              this.pujaFormData = true;

            }             

   camposNoValidos(campo:string){

              return this.pujaFAForm.controls[campo].errors &&
                     this.pujaFAForm.controls[campo].touched; 
            }
}
