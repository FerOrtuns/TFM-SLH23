
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyGM } from '../../interfaces/MyGM.interface';
import { InfogmService } from '../../services/infogm.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit{


  @Input() gminfo!: MyGM ;

  AKA!: string;

  constructor (private  router : Router,
               private authService: AuthService,
               private infogmS : InfogmService ) { }
  ngOnInit() {

    const email = this.authService.user.email;

    this.infogmS.getInfoGmByEmail(email!)
      .subscribe( resp => {
        this.gminfo = resp;
        this.AKA = resp.AKA;
      })

  }

  get user (){
    return this.authService.user;
  }

  logout(){

    this.router.navigateByUrl('./auth/login');

    this.authService.logout();

  }
}