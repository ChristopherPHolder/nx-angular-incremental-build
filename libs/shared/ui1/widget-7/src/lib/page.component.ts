import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Ui1Widget7Item0 } from './item-0.component';
import { Ui1Widget7Item1 } from './item-1.component';
import { Ui1Widget7Item2 } from './item-2.component';
import { Ui1Widget7Item3 } from './item-3.component';
import { Ui1Widget7Item4 } from './item-4.component';
import { Ui1Widget7Item5 } from './item-5.component';
import { Ui1Widget7Item6 } from './item-6.component';
import { Ui1Widget7Item7 } from './item-7.component';

@Component({
  selector: 'ui1-widget-7-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Ui1Widget7Item0, Ui1Widget7Item1, Ui1Widget7Item2, Ui1Widget7Item3, Ui1Widget7Item4, Ui1Widget7Item5, Ui1Widget7Item6, Ui1Widget7Item7],
  template: `
    <ui1-widget-7-item-0 />
    <ui1-widget-7-item-1 />
    <ui1-widget-7-item-2 />
    <ui1-widget-7-item-3 />
    <ui1-widget-7-item-4 />
    <ui1-widget-7-item-5 />
    <ui1-widget-7-item-6 />
    <ui1-widget-7-item-7 />
  `,
})
export class Ui1Widget7Page {}
