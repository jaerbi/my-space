import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from '../../recipes/recipe.model';
import { RecipeService } from '../../recipes/recipe.service';
import { map } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class FirebaseService {

  fbUrl = 'https://my-space-jaerbi.firebaseio.com';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put(
      `${this.fbUrl}/recipes.json?auth=${token}`,
      this.recipeService.getRecipes()
    );
  }

  /**
   * Use token from firebase and get recipe
   */
  getRecipes() {
    const token = this.authService.getToken();

    return this.http.get(`${this.fbUrl}/recipes.json?auth=${token}`)
      .pipe(
        map((recipes: Recipe[]) => {
          for (const recipe of recipes) {
            // added empty array if ingredients all deleted
            if ( !recipe.ingredients ) {
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
