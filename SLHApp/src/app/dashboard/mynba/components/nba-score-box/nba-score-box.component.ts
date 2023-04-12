import { Component, OnInit } from '@angular/core';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';
import { Apiscoresbox } from '../../../interfaces/ApiScorebox.interface';



@Component({
  selector: 'app-nba-score-box',
  templateUrl: './nba-score-box.component.html',
  styleUrls: []
})
export class NbaScoreBoxComponent implements OnInit {

  todayScorebox!: Apiscoresbox[];



  constructor(private sapi: SearchApiService) { }

  ngOnInit() {

    let date = this.getDate();

    this.sapi.apiScorebox(date)
      .subscribe((resp: Apiscoresbox[]) => {
        
        this.todayScorebox = resp;

      })


  }

  getDate() {
    const hoy = new Date();

    const yyyy = hoy.getFullYear().toString();
    const dd = (hoy.getDate() - 1).toString();

    const mm = hoy.getUTCMonth().toString();

    const date: string = yyyy + '-' + mm + '-' + dd;

    return date;
  }

}
