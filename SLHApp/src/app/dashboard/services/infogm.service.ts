import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { dbGM } from '../interfaces/dbgm.interface';
import { MyRoster } from '../interfaces/Myroster.interface';

@Injectable({
  providedIn: 'root'
})
export class InfogmService {

  private _baseUrl: string = environment.baseUrl;
  private idGM: number = 1 ; //TODO: cambiar esto a var
  private AKA: string = "UTA" ; //TODO: cambiar esto a var
  

  constructor(private http: HttpClient) { }

  // GET INFO DE UN SOLO GM POR EL IDGM

  getInfoGM ( idGM: number ) : Observable <dbGM> {

    const url = `${this._baseUrl}/dashboard/myteam/infoGMs/${this.idGM}`

    return this.http.get<dbGM>(url)
  };

  // GET DE ROSTER POR AKA DE LA DB DE PLAYERS

  getRoster ( AKA: string ) : Observable <MyRoster> {

    const url = `${this._baseUrl}/dashboard/myteam/players/${this.AKA}`

    return this.http.get<MyRoster>(url)
  };

  // GET INFPO DE TODOS LOS GMS A LA VEZ

  getInfoGMS () : Observable <dbGM[]> {

    const url = `${this._baseUrl}/dashboard/infoGMs/${this.idGM}`

    return this.http.get<dbGM[]>(url, )
  }
}
