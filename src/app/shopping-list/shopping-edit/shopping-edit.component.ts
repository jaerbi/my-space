import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subEditing: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private shopLService: ShoppingListService) { }

  ngOnInit() {
    this.subEditing = this.shopLService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
        }
      );
  }

  /**
   * Added new ingredients use TD Form
   * @param NgForm form
   */
  onAddItem(form: HTMLFormElement) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    this.shopLService.addIngredient(newIngredient);
  }

  ngOnDestroy(): void {
    this.subEditing.unsubscribe();
  }
}
