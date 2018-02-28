import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 1) {
      return "Road/Vehicle accident";
    } else if (value == 2) {
      return "Fire accident";
    } else if (value == 3) {
      return "Electric Shock accident";
    } else if (value == 4) {
      return "Slip or Trip";
    } else {
      return "Other";
    }
  }

}
