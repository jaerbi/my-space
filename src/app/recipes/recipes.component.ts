import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipeForDetail: Recipe;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Recipe item from children component that was chosen
   * @param Recipe recipeItem
   */
  recipeSelected(recipeItem: Recipe) {
    this.recipeForDetail = recipeItem;
  }

}
