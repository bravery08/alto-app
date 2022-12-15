import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'division'
})
export class DivisionPipe implements PipeTransform {

  transform(value: number | undefined | null, divider: number): number | undefined | null {
    if(value === undefined || value === null) {
      return value;
    }
    return value / divider;
  }

}
