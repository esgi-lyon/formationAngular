import { Pipe, PipeTransform } from '@angular/core';
import { State } from 'app/pages/stat/Stat';

@Pipe({
  name: 'stateToColor'
})
export class StateToColorPipe implements PipeTransform {
  transform(value: State): string {
    return State[value]
  }
}
