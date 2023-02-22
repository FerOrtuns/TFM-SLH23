import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad, CanMatch, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad, CanMatch {

constructor ( private authService : AuthService,
              private router: Router ) {}; 

  canActivate(): Observable<boolean> | boolean  {

    
    return this.authService.validarToken()
              .pipe(
                tap( valid =>{ 
                  if(!valid){
                      this.router.navigateByUrl('/auth/login');
                  }
                })
              )
  }  

  
  canLoad(): Observable<boolean> | boolean {


    return this.authService.validarToken()
    .pipe(
      tap( valid =>{ 
        if(!valid){
            this.router.navigateByUrl('/auth/login');
        }
      })
    );

  }



  
  canMatch(): Observable<boolean> | boolean {
    return true;
    
  }
}
