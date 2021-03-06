import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { GreenDirective } from '../shared/directive/green.directive';
import { SharedModule } from '../shared/shared.module';
import { TestLazyService } from '../shared/services/test-lazy.service';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    GreenDirective
  ],
  imports: [
    CommonModule, // ned to add to all Feature module
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  providers: [
    // TestLazyService
  ]
})
export class RecipesModule {}
