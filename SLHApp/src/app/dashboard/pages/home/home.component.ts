import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyGM } from '../../interfaces/MyGM.interface';
import { InfogmService } from '../../services/infogm.service';
import { MyNews } from '../../interfaces/MyNews.interface';

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
export class HomeComponent implements OnInit {

  gminfo!: MyGM;
  EQUIPO!: string;
  AKA!: string;
  mySLHnews!: MyNews[];


  constructor(private infogmS: InfogmService,
    private authservice: AuthService) { }

  ngOnInit() {

    const email = this.authservice.user.email;

    this.infogmS.getInfoGmByEmail(email!)
      .subscribe(resp => {
        this.gminfo = resp;

        this.EQUIPO = this.gminfo.EQUIPO!;
        this.AKA = this.gminfo.AKA!;

        console.log('equipo', this.EQUIPO);
        console.log('equipo', this.AKA);

      })

    this.infogmS.getSLHNews()
    
      .subscribe(resp=> {

        this.mySLHnews  = resp;

        /* resp.forEach(element => {
          this.mySLHnews.push(element)
        }); */

        console.log(this.mySLHnews,'mySLHnews');
        
      })


  }
}
