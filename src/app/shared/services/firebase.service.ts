import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';

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
    // const token = this.authService.getToken();

    return this.http.put(
      `${this.fbUrl}/recipes.json`,
      this.recipeService.getRecipes()
      // , {
      //   params: new HttpParams().set('auth', token) // query params
      // }
    );

    // const req = new HttpRequest(
    //   'PUT',
    //   `${this.fbUrl}/recipes.json`,
    //   this.recipeService.getRecipes(),
    //   {
    //     reportProgress: true,
    //     params: new HttpParams().set('auth', token) // query params
    //   });
    // return this.http.request(req);
  }

  /**
   * Use token from firebase and get recipe
   */
  getRecipes() {
    // const token = this.authService.getToken();

    return this.http.get<Recipe[]>(`${this.fbUrl}/recipes.json`
    //   , {
    //   params: new HttpParams().set('auth', token) // query params
    // }
    )
      .pipe(
        map((recipes) => {
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
