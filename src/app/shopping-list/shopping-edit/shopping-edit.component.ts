import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';

import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form', {static: true}) slForm: HTMLFormElement;

  subEditing: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shopLService: ShoppingListService) { }

  ngOnInit() {
    console.log(this.slForm);
    this.subEditing = this.shopLService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shopLService.getIngredient(index);

          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  /**
   * Added or update new ingredients use TD Form
   * @param NgForm form
   */
  onSubmit(form: HTMLFormElement) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.shopLService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shopLService.addIngredient(newIngredient);
    }

    this.editMode = false;
    form.reset();
  }

  /**
   * Reset form
   */
  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  /**
   * Delete item
   */
  onDelete() {
    this.shopLService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subEditing.unsubscribe();
  }
}
