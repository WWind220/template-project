/**
 * Created by Oksana on 4/4/2017.
 */
/**
 * Created by Oksana on 4/3/2017.
 */
import {
  Component, trigger,
  state,
  transition,
  animate,
  style, ApplicationRef
} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Toast, ToastData, ToastrService, ToastRef} from 'ngx-toastr';

@Component({
  selector: '[custom-toast]',
  templateUrl: 'custom-toast.component.html',
  styleUrls: ['custom-toast.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('inactive', style({
        display: 'none',
        transform: 'translateX(200%)'
      })),
      state('active', style({
        transform: 'translateX(0%)'
      })),
      state('removed', style({
        transform: 'translateX(200%)'
      })),
      transition('inactive <=> active', animate('150ms linear')),
      transition('active <=> removed', animate('150ms linear')),
    ]),
  ],
})

export class CustomToast extends Toast {
  private messageText = 'kpopop';
  undoString = 'undo';

  constructor(protected toastrService: ToastrService,
              public data: ToastData,
              protected toastRef: ToastRef<any>,
              protected appRef: ApplicationRef,
              protected sanitizer: DomSanitizer) {
    super(toastrService, data, toastRef, appRef, sanitizer);
  }

  showMessage() {
    this.onAction.next(alert(this.messageText));
  }
}
