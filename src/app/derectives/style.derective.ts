import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})

export class StyleDirective {
  @Input('appStyle') color: string;
  @Input() styleData: {};

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.style.color = "red"
    this.renderer.setStyle(el.nativeElement, 'color', 'blue');
  }

  @HostBinding('style.color') elColor = null;

  @HostListener('click', ['$event.target']) onClick(e: Event) {
    this.renderer.setStyle(e, 'color', this.color);
    /// this.elColor = this.color alternative
    console.log(this.styleData);
  }
}
