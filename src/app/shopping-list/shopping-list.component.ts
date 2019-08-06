import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import { TestLazyService } from '../shared/services/test-lazy.service';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromShoppingList from './store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.scss' ]
})
export class ShoppingListComponent implements OnInit {

  // before ngrx Redux
  // private subIngredients: Subscription;
  // ingredients: Ingredient[];
  // private destroyStream = new Subject<void>();

  shoppingListState: Observable<{ ingredients: Ingredient[] }>;

  constructor(
    public testLazy: TestLazyService,
    private store: Store<fromShoppingList.AppState>
  ) {
  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');

    // before ngrx Redux
    // this.ingredients = this.shopLService.getIngredients();
    // this.subIngredients = this.shopLService.ingredientsChanged
    //   .pipe(takeUntil(this.destroyStream))
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     },
    //     (error) => console.log(error),
    //     () => console.log('Steam Completed!')
    //   );
  }

  /**
   * Emit new number value to the service subject
   * @param number index
   */
  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));

    // before Redux
    // this.shopLService.startedEditing.next(index);
  }

  // ngOnDestroy(): void {
  //   this.destroyStream.next();
  // }
}
