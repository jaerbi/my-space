import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appFormError]'
})
export class FormErrorDirective implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    console.log(this.elementRef.nativeElement);
  }

}
