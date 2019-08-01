import {Recipe} from './recipe.model';
import { Injectable} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

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

  constructor(private shopLService: ShoppingListService) {}

  /**
   * Get recipes copy
   */
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  /**
   * @param number index
   */
  getRecipe(index: number) {
    return this.recipes[index];
  }

  /**
   * Add ingredients to shopping list
   */
  addIngredients(ingredients: Ingredient[]) {
    this.shopLService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
