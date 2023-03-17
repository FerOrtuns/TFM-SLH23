import { Component } from '@angular/core';
/* 
import  NORMATIVASLH22.pdf from 'src/assets/pdf/NORMATIVASLH22.pdf'; */

@Component({
  selector: 'app-normativa',
  templateUrl: './normativa.component.html',
  styleUrls: ['./normativa.component.css']
})
export class NormativaComponent {

  lotsOfTabs = new Array(20).fill(0).map((_, index) => `Tab ${index}`);

  pdfSource = "/assets/pdf/NORMATIVASLH22.pdf"
/*   pdfSource = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"; */

}
