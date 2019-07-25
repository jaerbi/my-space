import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective implements OnInit {

  // @Input() addClass = 'light-blue lighten-3';
  @Input('appGreen') addClass = 'light-blue lighten-3';

  @HostBinding('className') backgroundForText: string;
  @HostBinding('style.color') colorForText = '#333333';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.elementRef.nativeElement.className = 'teal darken-2';
    // this.elementRef.nativeElement.style.color = '#f2f2f2';

    // this.renderer.addClass(this.elementRef.nativeElement, 'lighten-4');
    // this.renderer.addClass(this.elementRef.nativeElement, 'teal');

    this.backgroundForText = this.addClass;
  }

  @HostListener('mouseenter', ['$event']) mouseHover(eventData: Event): void {
    this.backgroundForText = 'teal darken-2';
    this.colorForText = '#f2f2f2';
  }

  @HostListener('mouseleave', ['$event']) mouseLeave(eventData: Event): void {
    this.backgroundForText = this.addClass;
    this.colorForText = '#333333';
  }

}
