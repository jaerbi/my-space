import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';

import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form', {static: true}) slForm: NgForm;

  subEditing: Subscription;
  editMode = false;
  editedItem: Ingredient;
  // editedItemIndex: number;

  // private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  constructor(
    private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.subEditing = this.store.select('shoppingList').subscribe(
      storeData => {
        if (storeData.editedIngredientIndex > -1) {
          this.editedItem = storeData.editedIngredient;
          this.editMode = true;

          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        } else {
          this.editMode = false;
        }
      }
    );

    // before Redux
    // this.subEditing = this.shopLService.startedEditing
    //   .subscribe(
    //     (index: number) => {
    //       this.editedItemIndex = index;
    //       this.editMode = true;
    //       this.editedItem = this.shopLService.getIngredient(index);
    //
    //       this.slForm.setValue({
    //         name: this.editedItem.name,
    //         amount: this.editedItem.amount
    //       });
    //     }
    //   );
  }

  /**
   * Added or update new ingredients use TD Form
   * @param NgForm form
   */
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      // before Redux
      // this.shopLService.updateIngredient(this.editedItemIndex, newIngredient);

      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient({ ingredient: newIngredient })
      );

    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));

      // before Redux
      // this.shopLService.addIngredient(newIngredient);
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
    // before Redux
    // this.shopLService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subEditing.unsubscribe();
  }
}
