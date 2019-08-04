import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { SharedModule } from '../shared/shared.module';
import { TestLazyService } from '../shared/services/test-lazy.service';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule, // ned to add to all Feature module
    FormsModule,
    SharedModule
  ],
  providers: [
    TestLazyService
  ]
})
export class ShoppingListModule {

}
