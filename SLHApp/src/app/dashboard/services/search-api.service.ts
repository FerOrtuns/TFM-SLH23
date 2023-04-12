import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Apiplayers } from '../interfaces/Apiplayers.interface';
import { Apinews } from '../interfaces/ApiNews.interface';
import { Apiscoresbox } from '../interfaces/ApiScorebox.interface';



@Injectable({
  providedIn: 'root'
})




export class SearchApiService {




  private _nbaApiUrl: string = environment.nbaApiUrl;
  private _key: string = environment.nbaApiKey;

  constructor(private http: HttpClient) { }

  private _historial: string[] = [];
  public resPlayers: Apiplayers[] = [];

  get historial() {

    return [...this._historial];
  }



  buscarPlayers() {



    const url = `${this._nbaApiUrl}/PlayerSeasonStats/2022?key=${this._key}`



    return this.http.get<Apiplayers[]>(url,)
      .subscribe((resp: Apiplayers[]) => {
        console.log(resp);
        this.resPlayers = resp;

      })

  }

  buscarAllPlayersInfo() {



    const url = `${this._nbaApiUrl}/Players?key=${this._key}`



    return this.http.get<Apiplayers[]>(url,)


  }


  buscarAllPlayers2022() {


    const url = `${this._nbaApiUrl}/PlayerSeasonStats/{2022}?key=${this._key}`

    return this.http.get<Apiplayers[]>(url,)

  } // END OF BUSCAR PLAYER BYSEASON


  apiNews() {

    const url = `${this._nbaApiUrl}/News?key=${this._key}`



    return this.http.get<Apinews[]>(url,)


  }

  apiScorebox(reqDate: string) {

    const url = `${this._nbaApiUrl}/BoxScores/${reqDate}?key=${this._key}`



    return this.http.get<Apiscoresbox[]>(url,)

  }

}
