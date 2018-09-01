import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(items: any[], args?: any): any {
    return items.sort((a: any, b: any) => {
      if (+a[args.prop] < +b[args.prop]) {
        return -1 * args.direction;
      } else if (+a[args.prop] > +b[args.prop]) {
        return 1 * args.direction;
      } else {
        return 0;
      }
    });
  }

}
