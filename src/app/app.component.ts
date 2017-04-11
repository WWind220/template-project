import {Component} from '@angular/core';
// import {ApiService} from './shared';
import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';

import '../style/app.scss';

@Component({
  selector: 'app', // <app></app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;
  prop: boolean;

  constructor() {
    this.title = 'My custom title';
    this.prop = false;
  }

  open(p: NgbPopover) {
    p.ngbPopover = 'hi';
    p.open();
  }

  close(p: NgbPopover) {
    p.close();
  }

  changeProperty() {
    this.prop = !this.prop;
  }
}
