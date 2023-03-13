import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent {

  constructor (private infogmS : InfogmService, 
    private fb: FormBuilder){}

  tradeForm : FormGroup = this.fb.group({
    nameP: ['yo',[Validators.required]],
    ofertaFA: ['2',[Validators.required]],
    years: ['2',[Validators.required]],
    team: ['Atlanta Hawks',[Validators.required]],
    startTimeOffer: ['time.now',[Validators.required]],
  })

}
