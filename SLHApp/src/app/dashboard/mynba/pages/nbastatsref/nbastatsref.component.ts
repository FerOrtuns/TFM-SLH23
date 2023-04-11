
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Apiplayers } from 'src/app/dashboard/interfaces/Apiplayers.interface';
import { SearchApiService } from 'src/app/dashboard/services/search-api.service';



@Component({
  selector: 'app-nbastatsref',
  templateUrl: './nbastatsref.component.html',
  styleUrls: ['./nbastatsref.component.css']
})
export class NbastatsrefComponent implements OnInit {

  
  dataSource!: MatTableDataSource<Apiplayers>;


  public resPlayers: Apiplayers[] = [];
  public totaldata: number = 0;

  displayedColumns: string[] = ['JUGADOR', 'POS', 'TEAM', 'GAMES', 'Started', 'FantasyPoints',
    'Minutes', 'Points', 'Assists', 'Turnovers', 'Rebounds', 'Steals',
    'BlockedShots', 'FieldGoalsPercentage'];
  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  constructor(private sapi: SearchApiService) {
    
    this.dataSource = new MatTableDataSource(this.resPlayers);
   }


  ngOnInit() {

    this.sapi.buscarAllPlayers2022()
      .subscribe((resp: Apiplayers[]) => {

        this.resPlayers = resp;
        this.dataSource = new MatTableDataSource(this.resPlayers);
        this.dataSource.paginator = this.paginator;
        this.totaldata = resp.length;
      })
  };
  
  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
  }

}
