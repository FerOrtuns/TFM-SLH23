import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';

@Component({
  selector: 'app-agencialibre',
  templateUrl: './agencialibre.component.html',
  styleUrls: ['./agencialibre.component.css']
})
export class AgencialibreComponent implements OnInit {

  dataSource!: MatTableDataSource<MyPlayer>;

  PLAYER!: string;

  listaFAs!: MyPlayer[];

  public page: number = 0;

  totaldata: number =0;
  

  displayedColumns: string[] = ['PUJAR', 'POS', 'PLAYER', 'SALARIO', 'YEARS', 'EQUIPO'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

 

  constructor(private infogmS: InfogmService) { 
    
    this.dataSource = new MatTableDataSource(this.listaFAs);
  }


  ngOnInit() {

    this.infogmS.getFA()
      .subscribe(resp => {
        this.listaFAs = resp;
        this.dataSource = new MatTableDataSource(this.listaFAs);
        this.dataSource.paginator = this.paginator;
        this.totaldata = resp.length;
        
      })
  }

  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
  }
  /*  nextPage() {
 
     if (this.page < this.dataSource.length - 5) {
       this.page += 5;
     }
 
   }
 
   prevPage() {
     if (this.page > 0) {
       this.page -= 5;
     }
 
   } */
}
