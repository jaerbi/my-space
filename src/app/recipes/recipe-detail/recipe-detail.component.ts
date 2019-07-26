import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MaterialInstance, MaterialService} from '../../shared/materialize.service';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  recipe: Recipe;
  id: number;

  @ViewChild('floatingActionBtn', { static: false }) actionBtnRef: ElementRef;

  taptarget: MaterialInstance;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params.id;
        this.recipe = this.recipeService.getRecipe(this.id);
      });
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
