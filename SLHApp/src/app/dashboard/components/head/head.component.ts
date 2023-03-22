import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {

  constructor (private  router : Router,
               private authService: AuthService ) { }

  get user (){
    return this.authService.user;
  }

  logout(){

    this.router.navigateByUrl('./auth/login');

    this.authService.logout();

  }
}
