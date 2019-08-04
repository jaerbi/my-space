import { Component, OnInit } from '@angular/core';

import { TestLazyService } from '../../shared/services/test-lazy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  number = this.testLazy.counter;

  constructor(public testLazy: TestLazyService) { }

  ngOnInit() {
  }

  /**
   * Test for lazy service in root instance and lazy instance
   */
  onLazyTest() {
    this.number = ++this.number;
    this.testLazy.counter = this.number;
  }

}
