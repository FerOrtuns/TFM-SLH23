import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl;

  private _user!: User;

  get user (){
    return {...this._user};
  }

  constructor(private http: HttpClient) { }


  // REGISTER REGISTRO DE NEW USER REGISTER REGISTRO DE NEW USER REGISTER REGISTRO DE NEW USER

  registro (name: string, email: string, password: string) {

    const url = `${this._baseUrl}/auth/new`
    const body = {email, password, name};

     return this.http.post<AuthResponse>(url,body)
     .pipe(
      tap ( resp => {
        if(resp.ok){
          localStorage.setItem('token', resp.token!);
         
        }
      }),
      map (resp => resp.ok),
      catchError ( err => of(err.error.msg))
     )
  };



// LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN 

  login (email: string, password: string) {

    const url = `${this._baseUrl}/auth`
    const body = {email, password};

     return this.http.post<AuthResponse>(url,body)
     .pipe(
      tap ( resp => {
        if(resp.ok){
          localStorage.setItem('token', resp.token!);
          
        }
      }),
      map (resp => resp.ok),
      catchError ( err => of(err.error.msg))
     )
  };


validarToken () : Observable<boolean> {

  const url = `${this._baseUrl}/auth/renew`;
  const headers = new HttpHeaders()
                .set('x-token', localStorage.getItem('token') || '');

  return this.http.get<AuthResponse>(url, { headers})
  .pipe(
    map(resp=>{

      localStorage.setItem('token', resp.token!);
          this._user = {
            name: resp.name!,
            uid: resp.uid!,
            email: resp.email!
          }

     return resp.ok
    }),
    catchError (err => of (false))
  )

};


logout(){

  localStorage.clear();

}

}
