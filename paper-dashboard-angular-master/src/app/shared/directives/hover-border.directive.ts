import { Directive } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]'
})
export class HoverBorderDirective {

  constructor() {
    console.log("directive construite");
  }

}
