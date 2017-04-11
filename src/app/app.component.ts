import {Component} from '@angular/core';
// import {ApiService} from './shared';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

import '../style/app.scss';

@Component({
  selector: 'app', // <app></app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;
  constructor() {
    this.title = 'My custom title';
  }
  open( p: NgbPopover) {
    p.open();
  }
  close( p: NgbPopover) {
    p.close();
  }
}
