import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-page-filter',
  templateUrl: './button-page-filter.component.html',
  styleUrls: ['./button-page-filter.component.css']
})
export class ButtonPageFilterComponent {

  public data!: any;
  
  @Output()  page! : number;


  nextPage(){

    if(this.page< this.data.length-5){
      this.page += 5;
    }
    
  }

  prevPage(){
    if(this.page > 0){
      this.page -= 5;
    }
  
  }
}
