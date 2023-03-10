import { Component } from '@angular/core';

@Component({
  selector: 'app-normativa',
  templateUrl: './normativa.component.html',
  styleUrls: ['./normativa.component.css']
})
export class NormativaComponent {

  lotsOfTabs = new Array(20).fill(0).map((_, index) => `Tab ${index}`);

}
