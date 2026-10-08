import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Ui0Widget10Item0 } from './item-0.component';
import { Ui0Widget10Item1 } from './item-1.component';
import { Ui0Widget10Item2 } from './item-2.component';
import { Ui0Widget10Item3 } from './item-3.component';
import { Ui0Widget10Item4 } from './item-4.component';
import { Ui0Widget10Item5 } from './item-5.component';
import { Ui0Widget10Item6 } from './item-6.component';
import { Ui0Widget10Item7 } from './item-7.component';

@Component({
  selector: 'ui0-widget-10-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Ui0Widget10Item0, Ui0Widget10Item1, Ui0Widget10Item2, Ui0Widget10Item3, Ui0Widget10Item4, Ui0Widget10Item5, Ui0Widget10Item6, Ui0Widget10Item7],
  template: `
    <ui0-widget-10-item-0 />
    <ui0-widget-10-item-1 />
    <ui0-widget-10-item-2 />
    <ui0-widget-10-item-3 />
    <ui0-widget-10-item-4 />
    <ui0-widget-10-item-5 />
    <ui0-widget-10-item-6 />
    <ui0-widget-10-item-7 />
  `,
})
export class Ui0Widget10Page {}
