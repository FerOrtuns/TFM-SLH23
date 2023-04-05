import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MyPlayer } from '../interfaces/MyPlayer.interface';
import { MyGM } from '../interfaces/MyGM.interface';
import { MyNews } from '../interfaces/MyNews.interface';

@Injectable({
  providedIn: 'root'
})
export class InfogmService {

  private _baseUrl: string = environment.baseUrl;
  

  constructor(private http: HttpClient) { }

  // GET INFO DE UN SOLO GM POR EL aka

  getInfoGMByAKA ( AKA: string  ) : Observable <MyGM> {

    const url = `${this._baseUrl}/dashboard/myteam/infoGMs/${AKA}`

    return this.http.get<MyGM>(url)
  };

  // GET DE ROSTER POR AKA DE LA DB DE PLAYERS

  getRoster ( AKA: string ) : Observable <MyPlayer[]> {

    const url = `${this._baseUrl}/dashboard/myteam/players/${AKA}`

    return this.http.get<MyPlayer[]>(url)

    
  };

  // GET DE ROSTER POR AKA DE LA DB DE PLAYERS

  getFA () : Observable <MyPlayer[]> {

    const url = `${this._baseUrl}/dashboard/myteam/playersfa`

    return this.http.get<MyPlayer[]>(url)
  };

  // GET INFO DE TODOS LOS GMS A LA VEZ

  getInfoGMS () : Observable <MyGM[]> {

    const url = `${this._baseUrl}/dashboard/myleague/equipos`

    return this.http.get<MyGM[]>(url, )
  }

  // PUT PARA ACTUALIZAR PLAYERS Y FICHAR DE FA

  putFA (PLAYER: string, TEAM: string, SALARIO: number, YEARS: number, TIPO: string) : Observable <MyPlayer> {

    const url = `${this._baseUrl}/dashboard/myleague/ficharfa`



    const body = {PLAYER, TEAM, SALARIO, YEARS, TIPO}; 

    return this.http.put<MyPlayer>(url, body)
  };

 // PUT PARA grabar LAS NOTICIAS DE SLH

 putSLHNews (PLAYER: string, AKA: string, EQUIPO: string, SALARIO: number, YEARS: number, desde: Date, fichadoCortado: boolean) 
            : Observable <MyNews> {

  const url = `${this._baseUrl}/dashboard/mySLHNews`



  const body = {PLAYER, AKA, EQUIPO, SALARIO, YEARS, desde, fichadoCortado}; 

  return this.http.post<MyNews>(url, body)
};

 // GET INFO DE TODAS LAS NEWS

 getSLHNews () : Observable <MyNews[]> {

  const url = `${this._baseUrl}/dashboard/mySLHNews`

  return this.http.get<MyNews[]>(url, )
}



  getInfoGmByEmail (email: string) : Observable <MyGM> {

    const url = `${this._baseUrl}/dashboard/myteam/infoGM/${email}`

    return this.http.get<MyGM>(url, )
  }

  isMyTeam(AKA:string): boolean {

      
      return false;
  }
}
