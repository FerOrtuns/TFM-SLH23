import { Pipe, PipeTransform } from '@angular/core';
import { Apiplayers } from '../interfaces/Apiplayers.interface';

@Pipe({
  name: 'apiplayerpageFilter'
})
export class ApiplayerpageFilterPipe implements PipeTransform {

  transform(value: Apiplayers[], page:number=0): Apiplayers[] {

    return value?.slice(page,page+7);
  }

}
