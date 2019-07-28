import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private destroyStream = new Subject<void>();
  private subIngredients: Subscription;

  ingredients: Ingredient[];

  constructor(private shopLService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shopLService.getIngredients();
    this.subIngredients = this.shopLService.ingredientsChanged
      .pipe(takeUntil(this.destroyStream))
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        },
        (error) => console.log(error),
        () => console.log('Steam Completed!')
      );
  }

  /**
   * Emit new number value to the service subject
   * @param number index
   */
  onEditItem(index: number) {
    this.shopLService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.destroyStream.next();
  }
}
