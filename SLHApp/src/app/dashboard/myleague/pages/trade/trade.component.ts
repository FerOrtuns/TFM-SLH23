import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';


@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  myroster!: MyPlayer[] ;
  myrosterR!: MyPlayer[] ;
  gminfoT!: MyGM ;
  gminfoT2!: MyGM ;
  gminfo!: MyGM ;
  AKA!: string;
  equiposinfo!: MyGM [];
  teamselected: boolean = false;
  teamsdataloaded: boolean = false;
  PLAYER!: string;
  validDrop: boolean = false;
  isMyTeam: boolean = false;
  myAKA!: string ;

  ofertaEnv!: MyPlayer[];
  
  

  displayedColumns: string[] = ['TIPO', 'POS', 'PLAYER', 'SALARIO', 'YEARS', 'OPT' ];

  displayedColumns2: string[] = [ 'Roster', 'alt_img', 'Nickname', 'SalarioLibre'];

/*   displayedColumns2: string[] = [ 'Roster', 'alt_img', 'Nickname', 'JUGADORES', 'Salarios', 'SalarioLibre', 'Mail2' ]; */

  dataSource = new MatTableDataSource(this.myroster);
  dataSource3 = new MatTableDataSource(this.myrosterR);
  dataSource2 = new MatTableDataSource(this.equiposinfo);


  ngOnInit() {


    const email = this.authservice.user.email;

    this.infogmS.getInfoGmByEmail(email!)
      .subscribe( resp => {
        this.gminfo = resp;
        this.myAKA = resp.AKA
        
    if(this.AKA === this.myAKA){ this.isMyTeam = true;} 

        console.log('aka',this.AKA);
        console.log('myaka',this.myAKA);

        let myAKA = resp.AKA;

        this.infogmS.getInfoGMByAKA(myAKA)
        .subscribe(resp=> {
          this.gminfoT = resp;
          console.log('infot',this.gminfoT);
          
        })
    
        this.infogmS.getRoster(myAKA)
                    .subscribe( resp => {
                      this.myroster = resp;                  
                    })
                    
                    this.infogmS.getInfoGMS()
                    .subscribe( resp => {
                      this.equiposinfo = resp;
    
                      this.teamsdataloaded=true;                       
                   })  
        
         })


/*     let AKA  = this.gminfo.AKA; */
    
                
         
   

   
          }

  constructor (private infogmS : InfogmService, 
               private fb: FormBuilder,
               private route: ActivatedRoute,
               private authservice : AuthService){}

/*   tradeForm : FormGroup = this.fb.group({
    nameP: ['yo',[Validators.required]],
    team: ['Atlanta Hawks',[Validators.required]],
  }) */

  droparPlayer(PLAYER:string) {

    /* 
  let PLAYER  = this.route.snapshot.paramMap.get("PLAYER");
*/
    /* 
  let SALARIOM  = this.route.snapshot.paramMap.get(SALARIO); */
/* 
          console.log('SALARIOM', SALARIOM);

          if (SALARIOM! > 2 ){return} */
      /* 
          const PLAYER = this.PLAYER; */
          const TEAM = "F.A";
          const SALARIO = 0;
          const YEARS = 0;
          const TIPO = "Jugador";
      
          console.log(PLAYER,'PLAYER');
          console.log(TEAM,'TEAM');
          console.log(SALARIO,'SALARIO');
          console.log(YEARS,'YEARS');
          console.log(TIPO,'TIPO');
          
          
          
      
          this.infogmS.putFA(PLAYER, TEAM, SALARIO, YEARS, TIPO )
                      .subscribe( resp => {
                       /*  this.pujaForm */
                        
                      })
                    
                      
                      window.location.reload();
                  }

                  selecTeam(AKA: string){
                    
                    this.teamselected=true;
                    
                    let AKAr  = AKA;

                    this.infogmS.getInfoGMByAKA(AKAr)
                    .subscribe(resp=> {
                    this.gminfoT2 = resp;
                    console.log('infot2',this.gminfoT2);

                    this.infogmS.getRoster(AKAr!)
                    .subscribe( resp => {
                    this.myrosterR = resp; 
                  
                    console.log(AKAr, 'AKAR');
                    console.log(this.myrosterR, 'myrosterR');

                    })  
            

                })
              }

              selectedassest(asset: MyPlayer){

                this.ofertaEnv.unshift(asset);

                console.log(this.ofertaEnv,'this oferta enviada');
                

              }
}
