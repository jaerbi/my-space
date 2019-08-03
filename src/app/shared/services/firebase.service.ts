import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Recipe} from '../../recipes/recipe.model';
import {RecipeService} from '../../recipes/recipe.service';
import {map} from 'rxjs/operators';

@Injectable()
export class FirebaseService {

  fbUrl = 'https://my-space-jaerbi.firebaseio.com';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    return this.http.put(`${this.fbUrl}/recipes.json`, this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get(`${this.fbUrl}/recipes.json`)
      .pipe(
        map((recipes) => {
          for (const recipe of recipes) {
            // added empty array if ingredients all deleted
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }

  fbPut(recipe: Recipe[]) {
    return this.http.put(`${this.fbUrl}/recipes.json`, recipe);
  }
}
