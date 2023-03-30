import { Pipe, PipeTransform } from '@angular/core';
import { Apiscoresbox, Game, AwayTeam, Team } from '../interfaces/ApiScorebox.interface';

@Pipe({
  name: 'logoaka'
})
export class LogoakaPipe implements PipeTransform {

  transform(value: string): string {

      let aka : string = '';

      if(value === 'SA' || value === 'SAS'){ aka ='SAS'}
      if(value === 'NY' || value === 'NYK'){ aka ='NYK'}
      if(value === 'BKN' || value === 'BRK'){ aka ='BRK'}
      if(value === 'LAL' || value === 'LAK'){ aka ='LAK'}

      return aka;

  }

}
