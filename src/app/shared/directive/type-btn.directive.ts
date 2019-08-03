import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTypeBtn]'
})
export class TypeBtnDirective implements OnInit {

  @Input('appTypeBtn') typeBtn: string;

  btnClass: string;
  backgroundBtn: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    switch (this.typeBtn) {
      case 'submit':
        this.btnClass = `green accent-4`;
        break;
      case 'danger':
        this.btnClass = `red darken-3`;
        break;
      case 'primary':
        this.btnClass = `blue darken-2`;
        break;
      case 'warning':
        this.btnClass = `orange darken-1`;
        break;
    }

    this.backgroundBtn = `waves-effect waves-light btn ${this.btnClass}`;
    this.setClass(this.backgroundBtn);
  }

  /**
   * Set classes to the element
   * @param string clases
   */
  setClass(clases: string) {
    clases.split(' ').forEach((item) => {
      this.renderer.addClass(this.elRef.nativeElement, item);
    });
  }
}
