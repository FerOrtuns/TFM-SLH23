import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-menunav',
  templateUrl: './menunav.component.html',
  styleUrls: ['./menunav.component.css']
})
export class MenunavComponent {
  
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
