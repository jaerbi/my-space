import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';
import { MaterialInstance, MaterialService } from '../../shared/materialize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  taptarget: MaterialInstance;

  @ViewChild('manageDropdown', { static: false }) dropDownRef: ElementRef;

  constructor(
    private fbService: FirebaseService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
  }

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

  onLogout() {
    this.authService.logout();
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
