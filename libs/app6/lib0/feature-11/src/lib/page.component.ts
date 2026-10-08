import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App6l0Feature11Item0 } from './item-0.component';
import { App6l0Feature11Item1 } from './item-1.component';
import { App6l0Feature11Item2 } from './item-2.component';
import { App6l0Feature11Item3 } from './item-3.component';
import { App6l0Feature11Item4 } from './item-4.component';
import { App6l0Feature11Item5 } from './item-5.component';
import { App6l0Feature11Item6 } from './item-6.component';
import { App6l0Feature11Item7 } from './item-7.component';

@Component({
  selector: 'app6l0-feature-11-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App6l0Feature11Item0, App6l0Feature11Item1, App6l0Feature11Item2, App6l0Feature11Item3, App6l0Feature11Item4, App6l0Feature11Item5, App6l0Feature11Item6, App6l0Feature11Item7],
  template: `
    <app6l0-feature-11-item-0 />
    <app6l0-feature-11-item-1 />
    <app6l0-feature-11-item-2 />
    <app6l0-feature-11-item-3 />
    <app6l0-feature-11-item-4 />
    <app6l0-feature-11-item-5 />
    <app6l0-feature-11-item-6 />
    <app6l0-feature-11-item-7 />
  `,
})
export class App6l0Feature11Page {}
