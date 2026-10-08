import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Ui1Widget45Item0 } from './item-0.component';
import { Ui1Widget45Item1 } from './item-1.component';
import { Ui1Widget45Item2 } from './item-2.component';
import { Ui1Widget45Item3 } from './item-3.component';
import { Ui1Widget45Item4 } from './item-4.component';
import { Ui1Widget45Item5 } from './item-5.component';
import { Ui1Widget45Item6 } from './item-6.component';
import { Ui1Widget45Item7 } from './item-7.component';

@Component({
  selector: 'ui1-widget-45-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Ui1Widget45Item0, Ui1Widget45Item1, Ui1Widget45Item2, Ui1Widget45Item3, Ui1Widget45Item4, Ui1Widget45Item5, Ui1Widget45Item6, Ui1Widget45Item7],
  template: `
    <ui1-widget-45-item-0 />
    <ui1-widget-45-item-1 />
    <ui1-widget-45-item-2 />
    <ui1-widget-45-item-3 />
    <ui1-widget-45-item-4 />
    <ui1-widget-45-item-5 />
    <ui1-widget-45-item-6 />
    <ui1-widget-45-item-7 />
  `,
})
export class Ui1Widget45Page {}
