import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Apiplayers } from '../interfaces/Apiplayers.interface';
import { Apinews } from '../interfaces/ApiNews.interface';
import { Apiscoresbox } from '../interfaces/ApiScorebox.interface';

interface PlayerMatch {
  Name: string,
  PlayerId: number
}

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

  get resNews(): Apinews[] {

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

  buscarPlayer (query:string=''){

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query) ) {

    this._historial.unshift(query);

    this._historial = this._historial.splice(0,7);
                                           }

    const url = `${this._nbaApiUrl}/PlayerSeasonStats/2022?key=${this._key}`

    

     this.http.get<Apiplayers[]>(url, )
                    .subscribe ( (resp: Apiplayers[]) => {
                      console.log(resp);
                      this.resPlayers = resp;

                     /* 
                      
                      const playersName: string [] = []; */

                        let playerMatch!: PlayerMatch ;

                      
                      this.resPlayers.forEach(element => {

/*                            this.playersName.unshift(element.Name.toLowerCase()); */

                      if (element.Name.trim().toLocaleLowerCase() === query){

                        console.log('son iguales');
                        
/* 
                         element.Name=playerMatch.Name;
                         element.PlayerID=playerMatch.PlayerId;  */

                         /* if(element.Name.trim().toLocaleLowerCase().includes(query)){
                            element.PlayerID = this.pillaPlayerID;

                          console.log('playerID',this.pillaPlayerID); */
                          

                         }
                         else{
                          console.log('player not found men');
                        
                         }
                     
                        
                      })

                      /* this.playersName.forEach(element => {

                         
                      if(query === element){
                        console.log('bingo', element.name);
                        
                      } */
                       // END OF FOREACH


                      /* this.playersName = this.playersName;  
                                          

                      console.log('pid',this.playersName);                     
                      console.log('obio',this.playerMatch);  */                    
                    }) //
    
  } // END OF BUSCAR PLAYER

  apiNews () {

    const url = `${this._nbaApiUrl}/News?key=${this._key}`

    

    return this.http.get<Apinews[]>(url, )
                    .subscribe ( (resp: Apinews[]) => {
                      /* console.log(resp); */
                      this._resNews = resp;

                      console.log(this._resNews);
                      
                      
                    })

  }

  apiScorebox (reqDate:string) {

    const url = `${this._nbaApiUrl}/BoxScores/${reqDate}?key=${this._key}`

    

    return this.http.get<Apiscoresbox[]>(url, )
                    .subscribe ( (resp: Apiscoresbox[]) => {
                      /* console.log(resp); */
                      this.resScorebox= resp;

                      console.log(this.resScorebox);
                      
                      
                    })

  }

}
