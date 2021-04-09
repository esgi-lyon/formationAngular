import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appreciationToColor'
})
export class AppreciationToColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
