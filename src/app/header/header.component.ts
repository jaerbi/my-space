import {Component, AfterViewInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {MaterialInstance, MaterialService} from '../shared/materialize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {

  taptarget: MaterialInstance;

  @ViewChild('manageDropdown', { static: false }) dropDownRef: ElementRef;

  ngAfterViewInit(): void {
    this.taptarget = MaterialService.initializeDropdown(
      this.dropDownRef,
      {
        constrainWidth: true,
        coverTrigger: false
      });

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
