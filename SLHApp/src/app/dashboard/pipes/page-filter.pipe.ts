import { Pipe, PipeTransform } from '@angular/core';
import { MyPlayer } from '../interfaces/MyPlayer.interface';

@Pipe({
  name: 'pageFilter'
})
export class PageFilterPipe implements PipeTransform {

  transform(value: MyPlayer[], page:number=0): MyPlayer[] {

    return value?.slice(page,page+5);
  }

}
