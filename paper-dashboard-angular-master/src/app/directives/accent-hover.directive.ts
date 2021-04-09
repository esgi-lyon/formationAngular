import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { State } from 'app/pages/stat/Stat';

@Directive({
  selector: '[appAccentHover]'
})
export class AccentHoverDirective {
  @Input('appAccentHover') private accent?: State = State.info;

  constructor(private el: ElementRef) {}

  highlight() {
    this.el.nativeElement.classList.toggle(`border`)
    this.el.nativeElement.classList.toggle(`border-${String(this.accent)}`)
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight();
  }
}
