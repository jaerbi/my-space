import { Component, OnInit } from '@angular/core';
import { TestLazyService } from '../../shared/services/test-lazy.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.scss']
})
export class RecipeStartComponent implements OnInit {

  constructor(public testLazy: TestLazyService) { }

  ngOnInit() {
  }

}
