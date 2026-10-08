import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App6l0Feature30Item0 } from './item-0.component';
import { App6l0Feature30Item1 } from './item-1.component';
import { App6l0Feature30Item2 } from './item-2.component';
import { App6l0Feature30Item3 } from './item-3.component';
import { App6l0Feature30Item4 } from './item-4.component';
import { App6l0Feature30Item5 } from './item-5.component';
import { App6l0Feature30Item6 } from './item-6.component';
import { App6l0Feature30Item7 } from './item-7.component';

@Component({
  selector: 'app6l0-feature-30-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App6l0Feature30Item0, App6l0Feature30Item1, App6l0Feature30Item2, App6l0Feature30Item3, App6l0Feature30Item4, App6l0Feature30Item5, App6l0Feature30Item6, App6l0Feature30Item7],
  template: `
    <app6l0-feature-30-item-0 />
    <app6l0-feature-30-item-1 />
    <app6l0-feature-30-item-2 />
    <app6l0-feature-30-item-3 />
    <app6l0-feature-30-item-4 />
    <app6l0-feature-30-item-5 />
    <app6l0-feature-30-item-6 />
    <app6l0-feature-30-item-7 />
  `,
})
export class App6l0Feature30Page {}
