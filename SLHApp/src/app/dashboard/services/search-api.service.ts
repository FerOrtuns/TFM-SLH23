import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Apiplayers } from '../interfaces/Apiplayers.interface';
import { Apinews } from '../interfaces/ApiNews.interface';
import { Apiscoresbox } from '../interfaces/ApiScorebox.interface';
import { PlayerMatch } from '../interfaces/ApiPlayerFound.interface';



@Injectable({
  providedIn: 'root'
})




export class SearchApiService {

  

  
  private _nbaApiUrl: string = environment.nbaApiUrl;
  private _key: string = environment.nbaApiKey;

  constructor(private http: HttpClient) { }

  private _historial : string[] = [];
  public resPlayers :  Apiplayers[] = [];
  public playersName: string [] = [];

  public pillaPlayerID: number = 0;
  public playerFinded !: Apiplayers ;

  public playerMatch!: PlayerMatch ;

  private _resNews! : Apinews[]; 

  public resScorebox! : Apiscoresbox[];

  get historial (){

    return [...this._historial];
  }

  get resNews(){

    return [...this._resNews];
  }

  buscarPlayers (){

  

    const url = `${this._nbaApiUrl}/PlayerSeasonStats/2022?key=${this._key}`

    

    return this.http.get<Apiplayers[]>(url, )
                    .subscribe ( (resp: Apiplayers[]) => {
                      console.log(resp);
                      this.resPlayers = resp;
                      
                    })
    
  }

  buscarAllPlayersInfo (){

  

    const url = `${this._nbaApiUrl}/Players?key=${this._key}`

    

    return this.http.get<Apiplayers[]>(url, )
                   
    
  }

  buscarPlayer (query:string=''){

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query) ) {

    this._historial.unshift(query);

    this._historial = this._historial.splice(0,7);
                                           }

    const url = `${this._nbaApiUrl}/Players?key=${this._key}`

    

     this.http.get<Apiplayers[]>(url, )
                    .subscribe ( (resp: Apiplayers[]) => {


                      this.resPlayers = resp;

                      let match: number = 0;
                      
                    this.resPlayers.forEach(element => {

                        const pl = element.LastName.toLocaleLowerCase();
                        

                        if (pl  === query){
                      
                          match = 1;

                      console.log('son iguales');

                      console.log(element,'elem');
                      
                      const playerMatch: PlayerMatch = {

                        PlayerId: element.PlayerID,
                        Position: element.Position,
                        PhotoUrl: element.PhotoUrl,
                        YahooName: element.YahooName,
                        Team: element.Team,
                       
                      }
                      
                  }
               })

                    if(match === 0){console.log('nomatch men');
                  }
                                       
                    }) 
    
  } // END OF BUSCAR PLAYER

  buscarAllPlayers2022 (){


    const url = `${this._nbaApiUrl}/PlayerSeasonStats/{2022}?key=${this._key}`

    return this.http.get<Apiplayers[]>(url, )
    
  } // END OF BUSCAR PLAYER BYSEASON


  apiNews () {

    const url = `${this._nbaApiUrl}/News?key=${this._key}`

    

      return this.http.get<Apinews[]>(url, )
                    

  }

  apiScorebox (reqDate:string) {

    const url = `${this._nbaApiUrl}/BoxScores/${reqDate}?key=${this._key}`

    

    return this.http.get<Apiscoresbox[]>(url, )
                    
  }

}
