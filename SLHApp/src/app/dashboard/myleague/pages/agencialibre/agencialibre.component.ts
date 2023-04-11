import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';
@Component({
  selector: 'app-agencialibre',
  templateUrl: './agencialibre.component.html',
  styleUrls: ['./agencialibre.component.css']
})
export class AgencialibreComponent implements OnInit {


  PLAYER!: string;

  listaFAs!: MyPlayer[];

  public page: number = 0;
  dataSource!: any;

  displayedColumns: string[] = ['PUJAR', 'POS', 'PLAYER', 'SALARIO', 'YEARS', 'EQUIPO'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    console.log(filterValue, 'fv');

  }

  constructor(private infogmS: InfogmService) { }


  ngOnInit() {

    this.infogmS.getFA()
      .subscribe(resp => {
        this.listaFAs = resp;
/* 
        const data = Object.values(resp); */

        this.dataSource = new MatTableDataSource(this.listaFAs);
      })
  }

  nextPage() {

    if (this.page < this.dataSource.length - 5) {
      this.page += 5;
    }

  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 5;
    }

  }
}
