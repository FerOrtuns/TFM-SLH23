import { Pipe, PipeTransform } from '@angular/core';
import { Apiplayers } from '../interfaces/Apiplayers.interface';

@Pipe({
  name: 'apipageFilter'
})
export class ApipageFilterPipe implements PipeTransform {

  transform(value: Apiplayers[], page:number=0): Apiplayers[] {

    return value?.slice(page,page+5);
  }

}
