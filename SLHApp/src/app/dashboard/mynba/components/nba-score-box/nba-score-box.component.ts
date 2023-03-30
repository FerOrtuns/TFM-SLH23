import { Component, OnInit } from '@angular/core';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';
import { Apiscoresbox } from '../../../interfaces/ApiScorebox.interface';

interface GameHoy {

  Season: number,
  AwayTeam: string,
  HomeTeam: string,
  AwayTeamScore: number,
  HomeTeamScore: number

}

interface Logos {
  AKA: string,
  alt_img: string

  

}

@Component({
  selector: 'app-nba-score-box',
  templateUrl: './nba-score-box.component.html',
  styleUrls: ['./nba-score-box.component.css']
})
export class NbaScoreBoxComponent implements OnInit {

  todayScorebox!: Apiscoresbox[];
  equiposinfo!: MyGM[];
  logos!: Logos[] ;

  dataloaded!: boolean ;
  equiposdataloaded: boolean = false;
  todayScoreboxdataloaded: boolean = false;


  constructor(private sapi: SearchApiService,
    private infogmS: InfogmService) { }

  ngOnInit() {

    this.infogmS.getInfoGMS()
      .subscribe(resp => {

        this.equiposinfo = resp;

        if(resp){this.equiposdataloaded= true;}


        console.log('this.equiposdataloaded',this.equiposdataloaded);
        
        resp.forEach(element => {
/* 
          this.logos.push(element.alt_img!, element.AKA!); */
        });

      })


    const hoy = new Date();

    console.log(hoy, 'hoy');

    const yyyy = hoy.getFullYear().toString();
    /*     const mm = (hoy.getMonth()+1).toString(); */
    const dd = (hoy.getDate() - 1).toString();

    const mm = hoy.toLocaleString('default', { month: 'short' });

    const date: string = yyyy + '-' + mm + '-' + dd;

    console.log(date, 'date');
    console.log(mm, 'mm');

    this.sapi.apiScorebox(date)
      .subscribe((resp: Apiscoresbox[]) => {
        /* console.log(resp); */
        this.todayScorebox = resp;

        console.log(this.todayScorebox);

        if(resp){this.todayScoreboxdataloaded= true;}

        console.log(this.todayScoreboxdataloaded,'this.todayScoreboxdataloaded');

        if(this.equiposdataloaded && this.todayScoreboxdataloaded){ this.dataloaded=true};

        console.log(this.dataloaded,'this.dataloadeds');        

      })

      

    /* 
    const restodayScorebox = this.sapi.apiScorebox(date);
     */
    /*  this.todayScorebox= restodayScorebox;
     
     this.todayScorebox.array.forEach((element: Apiscoresbox) => {
 
         this.todayGames.AwayTeam = element.Game.AwayTeam
         this.todayGames.HomeTeam = element.Game.HomeTeam
         this.todayGames.Season = element.Game.Season
         this.todayGames.AwayTeamScore = element.Game.AwayTeamScore
         this.todayGames.HomeTeamScore = element.Game.HomeTeamScore
 
         
     });
     

     console.log(this.todayGames,'tg'); */

  }

  getlogo(AKA: string): string {


    let logo: string = '';

    this.equiposinfo.forEach(element => {


      if (AKA === element.AKA) { logo = element.alt_img! }

    });

    return logo;


  }

  /* setlogo(AKA: string, alt_img: string){

    let logo : Logos = new this.logos()
    
    logo.AKA= AKA;

    return logo;
  } */

}
