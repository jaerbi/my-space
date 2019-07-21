import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Some description',
      'https://img.taste.com.au/VkqI3zHq/w720-h480-cfill-q80/taste/2019/05/cheats-lasagne-stack-149732-2.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'Some description',
      'https://img.taste.com.au/VkqI3zHq/w720-h480-cfill-q80/taste/2019/05/cheats-lasagne-stack-149732-2.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Emit to Detail recipe
   * @param Recipe recipe
   */
  onClickRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
