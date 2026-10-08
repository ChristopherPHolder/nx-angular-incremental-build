import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Ui1Widget10Item0 } from './item-0.component';
import { Ui1Widget10Item1 } from './item-1.component';
import { Ui1Widget10Item2 } from './item-2.component';
import { Ui1Widget10Item3 } from './item-3.component';
import { Ui1Widget10Item4 } from './item-4.component';
import { Ui1Widget10Item5 } from './item-5.component';
import { Ui1Widget10Item6 } from './item-6.component';
import { Ui1Widget10Item7 } from './item-7.component';

@Component({
  selector: 'ui1-widget-10-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Ui1Widget10Item0, Ui1Widget10Item1, Ui1Widget10Item2, Ui1Widget10Item3, Ui1Widget10Item4, Ui1Widget10Item5, Ui1Widget10Item6, Ui1Widget10Item7],
  template: `
    <ui1-widget-10-item-0 />
    <ui1-widget-10-item-1 />
    <ui1-widget-10-item-2 />
    <ui1-widget-10-item-3 />
    <ui1-widget-10-item-4 />
    <ui1-widget-10-item-5 />
    <ui1-widget-10-item-6 />
    <ui1-widget-10-item-7 />
  `,
})
export class Ui1Widget10Page {}
