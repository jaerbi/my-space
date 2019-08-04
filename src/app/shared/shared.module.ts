import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './directive/dropdown.directive';
import { TypeBtnDirective } from './directive/type-btn.directive';
import { FormErrorDirective } from './directive/form-error.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    TypeBtnDirective,
    FormErrorDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    TypeBtnDirective,
    FormErrorDirective
  ]
})
export class SharedModule {

}
