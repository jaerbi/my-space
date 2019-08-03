import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { MaterialInstance, MaterialService } from '../shared/materialize.service';
import {FirebaseService} from '../shared/services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {

  taptarget: MaterialInstance;

  @ViewChild('manageDropdown', { static: false }) dropDownRef: ElementRef;

  constructor(private fbService: FirebaseService) {}

  ngAfterViewInit(): void {
    this.taptarget = MaterialService.initializeDropdown(
      this.dropDownRef,
      {
        constrainWidth: true,
        coverTrigger: false
      });

  }

  onSaveData() {
    this.fbService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.fbService.getRecipes();
  }

  ngOnDestroy(): void {
    this.taptarget.destroy();
  }

  /**
   * Open dropDown from nav menu
   */
  openManage() {
    this.taptarget.open();
  }
}
