import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zero'
})
export class ZeroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 1) {
      return "Low";
    } else if (value == 2) {
      return "Normal";
    } else if (value == 3) {
      return "High";
    } else {
      return "Critical";
    }
  }

}
