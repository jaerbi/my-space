import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MaterialInstance, MaterialService} from '../../shared/materialize.service';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
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
   * Navigate to edit relative path
   */
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
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

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy(): void {
    this.taptarget.destroy();
  }

}
