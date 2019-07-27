import {Subject} from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 7),
    new Ingredient('Bananas', 19),
  ];

  /**
   * Get copy ingredients array
   */
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  /**
   * Added array to the ingredients, ...use
   * @param Array ingredients
   */
  addIngredients(ingredients: Ingredient[]) {
    // for (const ingredient of ingredients) {
    //   console.log(ingredient);
    //   this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
