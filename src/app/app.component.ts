import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  constructor() {}

  ngOnInit(): void {
  }

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
