import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCitPipe'
})
export class MyCitPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // STRINGS
    if (typeof(value) === 'string') {
      return value;
    } else {
      // NUMBERS
      return value.toFixed(3);
    }
  }

}
