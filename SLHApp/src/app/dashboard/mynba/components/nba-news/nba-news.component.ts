import { Component, OnInit } from '@angular/core';
import { Apinews } from 'src/app/dashboard/interfaces/ApiNews.interface';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';

@Component({
  selector: 'app-nba-news',
  templateUrl: './nba-news.component.html',
  styleUrls: []
})
export class NbaNewsComponent implements OnInit {


  resNews2!: Apinews[];

  constructor(private sapi: SearchApiService) { }

  ngOnInit() {

    this.sapi.apiNews()
      .subscribe((resp: Apinews[]) => {
        
        this.resNews2 = resp;


      })

  }


}
