import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { InfogmService } from '../../../services/infogm.service';


@Component({
  selector: 'app-infogm',
  templateUrl: './infogm.component.html',
  styles: [
  ]
})
export class InfogmComponent implements OnInit {
/* 
idGM! : number;  */

gminfo!: MyGM ;


/* 
loaded: boolean = false;

if (gminfo: MyGM){this.loaded = true;}; */


constructor ( private infogmS : InfogmService,
              private authservice : AuthService) {}

  ngOnInit() {
    
 /* s */
/*                 let email  = this.route.snapshot.paramMap.get("AKA"); 
        
 */
              const email = this.authservice.user.email;

              this.infogmS.getInfoGmByEmail(email!)
                .subscribe( resp => {
                  this.gminfo = resp;
                   })
                   
                   
           /*  let equipo = this.gminfo.EQUIPO;
            console.log(equipo,'EQUIPO'); */
            
            /* let equipo = this.infogmS. */

             }


}
  

