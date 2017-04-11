/**
 * Created by Oksana on 4/3/2017.
 */
import {Component, Input} from '@angular/core';


@Component({
  selector: '<my-popover>',
  templateUrl: 'popover.component.html',
  styleUrls: ['popover.component.scss'],
})

export class PopoverComponent {
 // @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() title: string;
}

/*@Directive ({selector: '[mypopover]'})
export  class MyPopover{
  constructor (el: ElementRef){

  }
}*/
