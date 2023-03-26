import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyFecha } from 'src/app/dashboard/interfaces/MyFecha.interface';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { MyPuja } from 'src/app/dashboard/interfaces/MyPuja.interface';
import { MyPujaTiny } from 'src/app/dashboard/interfaces/MyPujaTiny.interface';
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

  pujaNew!: MyPuja[];

  PLAYER!: string ;

  EQUIPOOffer!: string;
  pujaForm!: MyPujaTiny;
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
          
           
              
              const pujaNew2 : MyPujaTiny = {
          
                PLAYER:        this.PLAYER,
                EQUIPO:        this.EQUIPOOffer,
                SALARIO:        this.pujaFAForm.controls['salarioOffer'].value,
                YEARS:          this.pujaFAForm.controls['years'].value,
                desde:          date,
                
              }
          
              this.pujaForm = pujaNew2;
          
          console.log('infoP', pujaNew2);

          if(this.pujaForm){this.infopuja = true;}
          
              
            } // END OF PUJA     
            
  guardarPuja(){

              console.log('guardando puja', this.pujaFAForm.value);
              
              
            }

            openInfo(){

              this.pujaFormData = true;

            }             

   camposNoValidos(campo:string){

              return this.pujaFAForm.controls[campo].errors &&
                     this.pujaFAForm.controls[campo].touched; 
            }
}
