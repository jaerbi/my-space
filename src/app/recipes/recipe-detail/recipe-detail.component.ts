import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MaterialInstance, MaterialService} from '../../shared/materialize.service';
import {Recipe} from '../recipe.model';
import {migrateLegacyGlobalConfig} from '@angular/cli/utilities/config';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() recipe: Recipe;

  @ViewChild('floatingActionBtn', { static: false }) actionBtnRef: ElementRef;

  taptarget: MaterialInstance;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.taptarget = MaterialService.initializeFloatingActionBtn(
      this.actionBtnRef,
      {
        direction: 'left',
        // hoverEnabled: false
      });
  }

  /**
   * Show Floating action Btn
   */
  showFloatingBtn() {
    this.taptarget.open();
  }

  /**
   * Add ingredients from recipe to shopping list
   */
  onAddToShopList() {
    this.recipeService.addIngredients(this.recipe.ingredients);
  }

  ngOnDestroy(): void {
    this.taptarget.destroy();
  }

}
