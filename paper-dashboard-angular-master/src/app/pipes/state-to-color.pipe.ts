import { Pipe, PipeTransform } from '@angular/core';
import { State } from 'app/pages/stat/Stat';

@Pipe({
  name: 'stateToColor'
})
export class StateToColorPipe implements PipeTransform {
  transform(value: State, log: boolean = false, consoleFn: string = 'log'): string {
    if (log) console[consoleFn]("Logging from stateToColor :", State[value], value)
    return String(State[value] || value).toLowerCase()
  }
}
