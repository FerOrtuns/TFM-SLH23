import { Component, OnInit } from '@angular/core';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';
import { Apiscoresbox } from '../../../interfaces/ApiScorebox.interface';

interface GameHoy {

  Season: number,
  AwayTeam: string,
  HomeTeam: string,
  AwayTeamScore: number,
  HomeTeamScore: number

}

@Component({
  selector: 'app-nba-score-box',
  templateUrl: './nba-score-box.component.html',
  styleUrls: []
})
export class NbaScoreBoxComponent implements OnInit {

  todayScorebox!: Apiscoresbox[];



  constructor(private sapi: SearchApiService) { }

  ngOnInit() {

    const hoy = new Date();

    console.log(hoy, 'hoy');

    const yyyy = hoy.getFullYear().toString();
    const dd = (hoy.getDate() - 1).toString();

    const mm = hoy.getUTCMonth().toString();

    const date: string = yyyy + '-' + mm + '-' + dd;

    console.log(date, 'date');
    console.log(mm, 'mm');

    this.sapi.apiScorebox(date)
      .subscribe((resp: Apiscoresbox[]) => {
        console.log(resp);
        this.todayScorebox = resp;



      })


  }



}
