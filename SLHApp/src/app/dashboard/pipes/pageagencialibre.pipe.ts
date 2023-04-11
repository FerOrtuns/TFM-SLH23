import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageagencialibre'
})
export class PageagencialibrePipe implements PipeTransform {

  transform(value: any[], page:number=0): any []{

    return value?.slice(page,page+5);
  }

}
