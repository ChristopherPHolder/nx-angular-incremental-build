import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Ui0Widget26Item0 } from './item-0.component';
import { Ui0Widget26Item1 } from './item-1.component';
import { Ui0Widget26Item2 } from './item-2.component';
import { Ui0Widget26Item3 } from './item-3.component';
import { Ui0Widget26Item4 } from './item-4.component';
import { Ui0Widget26Item5 } from './item-5.component';
import { Ui0Widget26Item6 } from './item-6.component';
import { Ui0Widget26Item7 } from './item-7.component';

@Component({
  selector: 'ui0-widget-26-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Ui0Widget26Item0, Ui0Widget26Item1, Ui0Widget26Item2, Ui0Widget26Item3, Ui0Widget26Item4, Ui0Widget26Item5, Ui0Widget26Item6, Ui0Widget26Item7],
  template: `
    <ui0-widget-26-item-0 />
    <ui0-widget-26-item-1 />
    <ui0-widget-26-item-2 />
    <ui0-widget-26-item-3 />
    <ui0-widget-26-item-4 />
    <ui0-widget-26-item-5 />
    <ui0-widget-26-item-6 />
    <ui0-widget-26-item-7 />
  `,
})
export class Ui0Widget26Page {}
