import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatTableDataSource } from '@angular/material/table';
import { MyFecha } from 'src/app/dashboard/interfaces/MyFecha.interface';
import { MyGM } from 'src/app/dashboard/interfaces/MyGM.interface';
import { MyPuja } from 'src/app/dashboard/interfaces/MyPuja.interface';
import { PujarComponent } from '../pujar/pujar.component';

@Component({
  selector: 'app-puja-fa',
  templateUrl: './puja-fa.component.html',
  styleUrls: ['./puja-fa.component.css']
})
export class PujaFAComponent implements OnInit{

  constructor(private _bottomSheetRef: MatBottomSheetRef<PujarComponent>) {}


  @Input() pujaNew!: MyPuja[];
  
  dataPuja: boolean = true;

  ngOnInit(): void {
/* 
      if(this.pujaNew){this.dataPuja = true}; */
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }


/*   gminfo!: MyGM;

  pujaForm!: MyPuja;

  pujaNew!: MyPuja[];

  data: boolean = false;
  dataPuja: boolean = false;

  PLAYER!: string ;

  EQUIPOOffer!: string; */

  
 displayedColumns: string[] = ['PLAYER', 'SALARIO', 'YEARS','EQUIPO', 'STARTTIME', 'ENDTIME' ];

 dataSource = new MatTableDataSource(this.pujaNew);

 


/*   startDate!: MyFecha ;
  endDate!: MyFecha ;
  mesS!: string; */

}
