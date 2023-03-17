import { Component, OnInit } from '@angular/core';
import { Apinews } from 'src/app/dashboard/interfaces/ApiNews.interface';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';

@Component({
  selector: 'app-nba-news',
  templateUrl: './nba-news.component.html',
  styleUrls: ['./nba-news.component.css']
})
export class NbaNewsComponent implements OnInit{

  public page : number = 0;

  get resNews()  {
    
    return this.sapi.apiNews; 
  }

  nbaNews!: Apinews[];
  

  constructor (private sapi: SearchApiService){}

  ngOnInit() {
 /* 
    this.nbaNews = this.resNews;  */
    console.log(this.resNews,'rnews');
    
  }

  
  nextPage(){

    if(this.page< this.nbaNews.length-3){
      this.page += 3;
    }
    
  }

  prevPage(){
    if(this.page > 0){
      this.page -= 3;
    }
  
  }

}
