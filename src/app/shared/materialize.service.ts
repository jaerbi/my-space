import {ElementRef} from '@angular/core';

declare var M;

export interface MaterialInstance {
  open?(): void;
  close?(): void;
  destroy?(): void;
}

export class MaterialService {
  static toast(message: string) {
    M.toast({html: message}, {displayLength: 5000});
  }

  static initializeDropdown(ref: ElementRef, options: object) {
    return M.Dropdown.init(ref.nativeElement, options);
  }

  static initializeFloatingActionBtn(ref: ElementRef, options: object) {
    return M.FloatingActionButton.init(ref.nativeElement, options);
  }

  static tooltip(ref: ElementRef, options: object) {
    return M.Tooltip.init(ref.nativeElement, options);
  }
}
