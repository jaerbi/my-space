import {ElementRef} from '@angular/core';

declare var M;

export interface MaterialInstance {
  open?(): void;
  close?(): void;
  destroy?(): void;
}

export class MaterialService {
  static toast(message: string) {
    M.toast({html: message});
  }

  static initializeDropdown(ref: ElementRef) {
    return M.Dropdown.init(ref.nativeElement);
  }
}
