import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]'
})
export class HoverBorderDirective {

  @Input() borderClass: string = "border-success";

  constructor(private el : ElementRef, private rend: Renderer2) {
  }
  
  @HostListener("mouseenter")
  onMouseEnter() {
    this.rend.addClass(this.el.nativeElement, "border");
    this.rend.addClass(this.el.nativeElement, "border-" + this.borderClass);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.rend.removeClass(this.el.nativeElement, "border");
    this.rend.removeClass(this.el.nativeElement, "border-" + this.borderClass);
  }

}
