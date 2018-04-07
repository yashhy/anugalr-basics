import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyColorDirective]'
})
export class MyColorDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onclick() {
    this.changeColor();
  }

  changeColor() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
}
