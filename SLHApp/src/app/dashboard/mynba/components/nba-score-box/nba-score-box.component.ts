import { Component, OnInit } from '@angular/core';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';
import { Apiscoresbox } from '../../../interfaces/ApiScorebox.interface';

interface GameHoy {

  Season: number,
  AwayTeam: string,
  HomeTeam:string,
  AwayTeamScore:number,
  HomeTeamScore:number

}

@Component({
  selector: 'app-nba-score-box',
  templateUrl: './nba-score-box.component.html',
  styleUrls: ['./nba-score-box.component.css']
})
export class NbaScoreBoxComponent implements OnInit{

  todayScorebox!: any;
  todayGames!: GameHoy;
  

  constructor( private sapi: SearchApiService){}

  ngOnInit() {

    const hoy = new Date();

    console.log(hoy,'hoy');

    const yyyy = hoy.getFullYear().toString();
    const mm = (hoy.getMonth()+1).toString();
    const dd = hoy.getDate().toString();

    const date : string = yyyy+'-'+mm+'-'+dd;
    
console.log(date, 'date');

    const restodayScorebox = this.sapi.apiScorebox(date);
    
    this.todayScorebox= restodayScorebox;
    
    this.todayScorebox.array.forEach((element: Apiscoresbox) => {

        this.todayGames.AwayTeam = element.Game.AwayTeam
        this.todayGames.HomeTeam = element.Game.HomeTeam
        this.todayGames.Season = element.Game.Season
        this.todayGames.AwayTeamScore = element.Game.AwayTeamScore
        this.todayGames.HomeTeamScore = element.Game.HomeTeamScore

        
    });
    

    console.log(this.todayGames,'tg');
  }



}
