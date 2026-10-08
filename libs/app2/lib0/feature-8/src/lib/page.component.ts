import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App2l0Feature8Item0 } from './item-0.component';
import { App2l0Feature8Item1 } from './item-1.component';
import { App2l0Feature8Item2 } from './item-2.component';
import { App2l0Feature8Item3 } from './item-3.component';
import { App2l0Feature8Item4 } from './item-4.component';
import { App2l0Feature8Item5 } from './item-5.component';
import { App2l0Feature8Item6 } from './item-6.component';
import { App2l0Feature8Item7 } from './item-7.component';

@Component({
  selector: 'app2l0-feature-8-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App2l0Feature8Item0, App2l0Feature8Item1, App2l0Feature8Item2, App2l0Feature8Item3, App2l0Feature8Item4, App2l0Feature8Item5, App2l0Feature8Item6, App2l0Feature8Item7],
  template: `
    <app2l0-feature-8-item-0 />
    <app2l0-feature-8-item-1 />
    <app2l0-feature-8-item-2 />
    <app2l0-feature-8-item-3 />
    <app2l0-feature-8-item-4 />
    <app2l0-feature-8-item-5 />
    <app2l0-feature-8-item-6 />
    <app2l0-feature-8-item-7 />
  `,
})
export class App2l0Feature8Page {}
