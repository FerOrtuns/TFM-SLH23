import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-agencialibre',
  templateUrl: './agencialibre.component.html',
  styleUrls: ['./agencialibre.component.css']
})
export class AgencialibreComponent implements OnInit {

  
  pujaFAForm : FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    ofertaFA: ['',[Validators.required, Validators.email]],
    years: ['',[Validators.required, Validators.minLength(6)]],
  })

/*     filter: new FormControl()
 */ 




 
  
  


  listaFAs! : MyPlayer[];

  
 displayedColumns: string[] = ['PUJAR', 'POS', 'PLAYER', 'SALARIO', 'YEARS','EQUIPO', 'TIMELINE' ];

 dataSource = new MatTableDataSource(this.listaFAs);


  constructor (private infogmS : InfogmService, 
               private fb: FormBuilder){}


  ngOnInit() {

    this.infogmS.getFA()            
        .subscribe( resp => {
        this.listaFAs = resp;                  
})
  }

}
