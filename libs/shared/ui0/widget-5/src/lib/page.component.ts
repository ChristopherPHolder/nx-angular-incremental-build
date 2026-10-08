import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Ui0Widget5Item0 } from './item-0.component';
import { Ui0Widget5Item1 } from './item-1.component';
import { Ui0Widget5Item2 } from './item-2.component';
import { Ui0Widget5Item3 } from './item-3.component';
import { Ui0Widget5Item4 } from './item-4.component';
import { Ui0Widget5Item5 } from './item-5.component';
import { Ui0Widget5Item6 } from './item-6.component';
import { Ui0Widget5Item7 } from './item-7.component';

@Component({
  selector: 'ui0-widget-5-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Ui0Widget5Item0, Ui0Widget5Item1, Ui0Widget5Item2, Ui0Widget5Item3, Ui0Widget5Item4, Ui0Widget5Item5, Ui0Widget5Item6, Ui0Widget5Item7],
  template: `
    <ui0-widget-5-item-0 />
    <ui0-widget-5-item-1 />
    <ui0-widget-5-item-2 />
    <ui0-widget-5-item-3 />
    <ui0-widget-5-item-4 />
    <ui0-widget-5-item-5 />
    <ui0-widget-5-item-6 />
    <ui0-widget-5-item-7 />
  `,
})
export class Ui0Widget5Page {}
