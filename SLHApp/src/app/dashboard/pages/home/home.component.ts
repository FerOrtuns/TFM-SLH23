import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyGM } from '../../interfaces/MyGM.interface';
import { InfogmService } from '../../services/infogm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .container{
      margin: 10px;
    }
    `
  ]
})
export class HomeComponent implements OnInit{

  gminfo!: MyGM ;
  EQUIPO!: string;

  constructor ( private infogmS : InfogmService,
    private authservice : AuthService) {}

    ngOnInit() {
    
       const email = this.authservice.user.email;
     
                   this.infogmS.getInfoGmByEmail(email!)
                     .subscribe( resp => {
                       this.gminfo = resp;

                       this.EQUIPO = this.gminfo.EQUIPO!;
                       
                       console.log('equipo', this.EQUIPO);
                       
                        })

                        
                  }
}
