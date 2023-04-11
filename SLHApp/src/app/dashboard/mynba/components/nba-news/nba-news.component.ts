import { Component, OnInit } from '@angular/core';
import { Apinews } from 'src/app/dashboard/interfaces/ApiNews.interface';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';

@Component({
  selector: 'app-nba-news',
  templateUrl: './nba-news.component.html',
  styleUrls: []
})
export class NbaNewsComponent implements OnInit {

  public page: number = 0;

  get resNews() {

    return this.sapi.apiNews();
  }

  nbaNews0!: any;
  nbaNews!: Apinews[];
  data: boolean = false;
  resNews2!: Apinews[];

  constructor(private sapi: SearchApiService) { }

  ngOnInit() {

    this.sapi.apiNews()
      .subscribe((resp: Apinews[]) => {
        /* console.log(resp); */
        this.resNews2 = resp;

        console.log(this.resNews2);


      })

  }

  nextPage() {

    if (this.page < this.resNews2.length - 3) {
      this.page += 3;
    }

  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 3;
    }

  }

}
