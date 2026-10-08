import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Ui1Widget43Item0 } from './item-0.component';
import { Ui1Widget43Item1 } from './item-1.component';
import { Ui1Widget43Item2 } from './item-2.component';
import { Ui1Widget43Item3 } from './item-3.component';
import { Ui1Widget43Item4 } from './item-4.component';
import { Ui1Widget43Item5 } from './item-5.component';
import { Ui1Widget43Item6 } from './item-6.component';
import { Ui1Widget43Item7 } from './item-7.component';

@Component({
  selector: 'ui1-widget-43-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Ui1Widget43Item0, Ui1Widget43Item1, Ui1Widget43Item2, Ui1Widget43Item3, Ui1Widget43Item4, Ui1Widget43Item5, Ui1Widget43Item6, Ui1Widget43Item7],
  template: `
    <ui1-widget-43-item-0 />
    <ui1-widget-43-item-1 />
    <ui1-widget-43-item-2 />
    <ui1-widget-43-item-3 />
    <ui1-widget-43-item-4 />
    <ui1-widget-43-item-5 />
    <ui1-widget-43-item-6 />
    <ui1-widget-43-item-7 />
  `,
})
export class Ui1Widget43Page {}
