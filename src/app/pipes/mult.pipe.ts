import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mult'
})
export class MultPipe implements PipeTransform {

  transform(value: number, pow: number): unknown {
    return value * pow;
  }

}
