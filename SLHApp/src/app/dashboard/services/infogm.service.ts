import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MyPlayer } from '../interfaces/MyPlayer.interface';
import { MyGM } from '../interfaces/MyGM.interface';

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

  getInfoGmByEmail (email: string) : Observable <MyGM> {

    const url = `${this._baseUrl}/dashboard/myteam/infoGM/${email}`

    return this.http.get<MyGM>(url, )
  }
}
