import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Some text for example',
      'https://img.taste.com.au/VkqI3zHq/w720-h480-cfill-q80/taste/2019/05/cheats-lasagne-stack-149732-2.jpg',
      [
        new Ingredient('French Fries', 3),
        new Ingredient('Sosidge', 7),
      ]
    ),
    new Recipe(
      'New Test Recipe',
      'Some description',
      'https://img.taste.com.au/VkqI3zHq/w720-h480-cfill-q80/taste/2019/05/cheats-lasagne-stack-149732-2.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 9),
      ]
    )
  ];

   constructor(private shopLService: ShoppingListService) {

   }

  /**
   * Get recipe copy
   */
  getRecipe(): Recipe[] {
     return this.recipes.slice();
   }

  /**
   * Add ingredients to shopping list
   */
  addIngredients(ingredients: Ingredient[]) {
     this.shopLService.addIngredients(ingredients);
   }
}
