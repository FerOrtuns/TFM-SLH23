import { Pipe, PipeTransform } from '@angular/core';
import { Apiplayers } from '../interfaces/Apiplayers.interface';

@Pipe({
  name: 'apiplayerinfopageFilter'
})
export class ApiplayerinfopageFilterPipe implements PipeTransform {

  transform(value: Apiplayers[], page:number=0): Apiplayers[] {

    return value?.slice(page,page+4);
  }
  }


