import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})
export class SidenavComponent {

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
