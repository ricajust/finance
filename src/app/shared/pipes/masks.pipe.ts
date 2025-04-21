import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'masks'
})
export class MasksPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
