import {Component} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from './shared';
import {PinkToast} from './pink.toast';
import {CustomToast} from './custom-toast/custom-toast.component';
import * as _ from 'lodash';
import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;
  temp = '45646654';

  constructor(private api: ApiService, private toastrService: ToastrService) {
    this.title = this.api.title;
  }

  showSimpleToastTopRigh() {
    let options = this.toastrService.toastrConfig;
    options.positionClass = 'toast-top-right';
    options.timeOut=0; // если все три timeOut=0/tapToDismiss=false/extendedTimeOut=0, сообщение само никуда не уйдет
   // options.tapToDismiss = false;
    options.extendedTimeOut = 0;


    this.toastrService.success('Hello world', 'toast-top-righ');
  }

  showSimpleToastBottomLeft() {
    let options = this.toastrService.toastrConfig;
    options.positionClass = 'toast-bottom-left';
    this.toastrService.warning('Hello world', 'toast-bottom-left');
  }

  showCustomComponent() {
    let opt = _.cloneDeep(this.toastrService.toastrConfig);
    opt.toastComponent = CustomToast;
    opt.timeOut = 0;
    opt.tapToDismiss = false;
    opt.autoDismiss = false;
    opt.closeButton = true;
    opt.positionClass = 'toast-top-right';
    // opt.autoDismiss = false;
    // opt.closeButton = true;
    let m = 'This is custom pink message';
    let t = 'Pink Title';

    const inserted = this.toastrService.success(m, t, opt);
    return inserted;
  }

  openPinkToast() {
    let opt = _.cloneDeep(this.toastrService.toastrConfig);
    opt.toastComponent = PinkToast;
    opt.toastClass = 'toast toast-pink';
    opt.timeOut = 0;
    opt.tapToDismiss = false;
    opt.autoDismiss = false;
    opt.closeButton = true;
    opt.positionClass = 'toast-top-right';
    // opt.autoDismiss = false;
    // opt.closeButton = true;
    let m = 'This is custom pink message';
    let t = 'Pink Title';

    const inserted = this.toastrService.success(m, t, opt);
    return inserted;
  }
}
