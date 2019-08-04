import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { TestLazyService } from '../shared/services/test-lazy.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { FirebaseService } from '../shared/services/firebase.service';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    TestLazyService,
    ShoppingListService,
    FirebaseService,
    RecipeService,
    AuthService
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule {

}
