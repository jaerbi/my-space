import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MaterialInstance, MaterialService} from '../../shared/materialize.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('recipeDropdown', { static: false }) dropDownRef: ElementRef;

  taptarget: MaterialInstance;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.taptarget = MaterialService.initializeDropdown(
      this.dropDownRef,
      {
        constrainWidth: false,
        coverTrigger: false
      });
  }

  /**
   * Open drop down menu
   */
  openDropdown() {
    this.taptarget.open();
  }

  ngOnDestroy(): void {
    this.taptarget.destroy();
  }

}
