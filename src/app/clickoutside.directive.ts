import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickoutside]'
})
export class ClickoutsideDirective {

  constructor(private ele:ElementRef) { }
  @Output() public clickOutsideEvent = new EventEmitter()

  @HostListener('document:click', ['$event.target']) public onClick(targetElement){
    const clickInside = this.ele.nativeElement.contains(targetElement)

    if(!clickInside)
      return this.clickOutsideEvent.emit(null)

  }

}
