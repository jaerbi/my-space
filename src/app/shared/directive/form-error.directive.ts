import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appFormError]'
})
export class FormErrorDirective implements OnInit {

  @Input('appFormError') form: HTMLFormElement;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    console.log(this.form.controls);
    console.log(this.elementRef.nativeElement);
  }
}
