
import { Component, HostBinding, Input, OnInit } from '@angular/core';
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

  @HostBinding('class.mobile-screen') mobileScreen = false;

  @Input() gminfo!: MyGM ;

  AKA!: string;
  movil: boolean = false;

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

      console.log(this.mobileScreen,'mobileScreen');
      const mediaQuery = window.matchMedia('(max-width: 600px)');
      mediaQuery.addEventListener('change', e => this.mobileScreen = e.matches);
      this.mobileScreen = mediaQuery.matches;
      
  }

  get user (){
    return this.authService.user;
  }

  logout(){

    this.router.navigateByUrl('./auth/login');

    this.authService.logout();

  }
}