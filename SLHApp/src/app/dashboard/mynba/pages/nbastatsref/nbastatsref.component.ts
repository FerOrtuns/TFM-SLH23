
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Apiplayers } from 'src/app/dashboard/interfaces/Apiplayers.interface';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';



@Component({
  selector: 'app-nbastatsref',
  templateUrl: './nbastatsref.component.html',
  styleUrls: ['./nbastatsref.component.css']
})
export class NbastatsrefComponent implements OnInit {


  public page: number = 0;
  public dataSource!: any ;
  public resPlayers: Apiplayers[] = [];

  displayedColumns: string[] = ['JUGADOR', 'POS', 'TEAM', 'GAMES', 'Started', 'FantasyPoints',
    'Minutes', 'Points', 'Assists', 'Turnovers', 'Rebounds', 'Steals',
    'BlockedShots', 'FieldGoalsPercentage'];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    console.log(filterValue,'fv');

  }

  constructor(private sapi: SearchApiService) { }


  ngOnInit() {

    this.sapi.buscarAllPlayers2022()
      .subscribe((resp: Apiplayers[]) => {
        console.log(resp);
        /* this.resPlayers = Object.keys(this.resPlayers).map((key)=>this.resPlayers[key]);   */  
        const resPlayersd = Object.entries(this.resPlayers).map(([key, value]) => value); 
        this.dataSource = new MatTableDataSource(resPlayersd);
      })
  };


  nextPage() {

    if (this.page < this.resPlayers.length - 6) {
      this.page += 6;
    }

  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 6;
    }

  }
}
