import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'second'
})
export class SecondPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 1) {
      return "Injured and Bleeding";
    } else if (value == 2) {
      return "Injured but not bleeding";
    } else if (value == 3) {
      return "Minor Fracture(s)";
    } else if (value == 4) {
      return "Major Fracture(s)";
    } else if (value == 5) {
      return "Severe Burns";
    } else if (value == 6) {
      return "Minor Burns";
    } else if (value == 7) {
      return "Unconscious";
    } else {
      return "Unfamiliar";
    }
  }

}
