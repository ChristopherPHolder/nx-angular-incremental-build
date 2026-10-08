import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App1l0Feature10Item0 } from './item-0.component';
import { App1l0Feature10Item1 } from './item-1.component';
import { App1l0Feature10Item2 } from './item-2.component';
import { App1l0Feature10Item3 } from './item-3.component';
import { App1l0Feature10Item4 } from './item-4.component';
import { App1l0Feature10Item5 } from './item-5.component';
import { App1l0Feature10Item6 } from './item-6.component';
import { App1l0Feature10Item7 } from './item-7.component';

@Component({
  selector: 'app1l0-feature-10-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App1l0Feature10Item0, App1l0Feature10Item1, App1l0Feature10Item2, App1l0Feature10Item3, App1l0Feature10Item4, App1l0Feature10Item5, App1l0Feature10Item6, App1l0Feature10Item7],
  template: `
    <app1l0-feature-10-item-0 />
    <app1l0-feature-10-item-1 />
    <app1l0-feature-10-item-2 />
    <app1l0-feature-10-item-3 />
    <app1l0-feature-10-item-4 />
    <app1l0-feature-10-item-5 />
    <app1l0-feature-10-item-6 />
    <app1l0-feature-10-item-7 />
  `,
})
export class App1l0Feature10Page {}
