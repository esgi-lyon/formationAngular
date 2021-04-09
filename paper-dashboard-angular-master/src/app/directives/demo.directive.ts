import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective implements OnInit {

  // constructor(private el : ElementRef) {
  //   console.log(el)
  // }

  @Input('appDemo') input: string;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    console.log(this.input)
    //Add 'implements OnInit' to the class.
  }
}
