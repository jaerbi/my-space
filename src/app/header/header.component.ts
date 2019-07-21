import {Component, Output, EventEmitter, AfterViewInit, OnDestroy, ViewChild, ElementRef, OnInit} from '@angular/core';
import {MaterialInstance, MaterialService} from '../shared/materialize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {

  taptarget: MaterialInstance;

  @Output() featureSelected = new EventEmitter<string>();

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
   * Emit for navigate component from menu
   * @param string feature
   */
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  /**
   * Open dropDown from nav menu
   */
  openManage() {
    this.taptarget.open();
  }
}
