import { query } from '@angular/animations';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Apiplayers } from 'src/app/dashboard/interfaces/Apiplayers.interface';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';



@Component({
  selector: 'app-nbastatsref',
  templateUrl: './nbastatsref.component.html',
  styleUrls: ['./nbastatsref.component.css']
})
export class NbastatsrefComponent implements OnInit{
/* 
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; 
 */

  public page : number = 0;

  public resPlayers :  Apiplayers[] = [];

  displayedColumns: string[] = ['JUGADOR', 'POS', 'TEAM', 'GAMES', 'Started','FantasyPoints',
                               'Minutes', 'Points', 'Assists', 'Turnovers', 'Rebounds', 'Steals',
                                'BlockedShots', 'FieldGoalsPercentage' ];
  
    dataSource = new MatTableDataSource(this.resPlayers);

  constructor (private sapi: SearchApiService){}
  
  
  ngOnInit(){

      this.sapi.buscarAllPlayers2022()
       .subscribe ( (resp: Apiplayers[]) => {
        console.log(resp);
        this.resPlayers = resp;
})
};


  nextPage(){

    if(this.page< this.resPlayers.length-7){
      this.page += 7;
    }
    
  }

  prevPage(){
    if(this.page > 0){
      this.page -= 7;
    }
  
  }
}
