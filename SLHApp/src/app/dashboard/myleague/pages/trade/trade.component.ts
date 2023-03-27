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
  gminfoT!: MyGM ;
  gminfo!: MyGM ;
  AKA!: string;

  displayedColumns: string[] = ['TIPO', 'POS', 'PLAYER', 'SALARIO', 'YEARS', 'OPT' ];

  dataSource = new MatTableDataSource(this.myroster);

  ngOnInit() {


    const email = this.authservice.user.email;

    this.infogmS.getInfoGmByEmail(email!)
      .subscribe( resp => {
        this.gminfo = resp;
        this.AKA = resp.AKA

        console.log('aka',this.AKA);
        
         }).unsubscribe();


/*     let AKA  = this.gminfo.AKA; */
    
    this.infogmS.getInfoGMByAKA('BOS')
    .subscribe(resp=> {
      this.gminfoT = resp;
      console.log('infot',this.gminfoT);
      
    })

    this.infogmS.getRoster('BOS')
                .subscribe( resp => {
                  this.myroster = resp;                  
                })
                
                
   

   
          }

  constructor (private infogmS : InfogmService, 
               private fb: FormBuilder,
               private route: ActivatedRoute,
               private authservice : AuthService){}

/*   tradeForm : FormGroup = this.fb.group({
    nameP: ['yo',[Validators.required]],
    team: ['Atlanta Hawks',[Validators.required]],
  }) */

}
