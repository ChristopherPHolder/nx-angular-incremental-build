import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App2l1Feature30Item0 } from './item-0.component';
import { App2l1Feature30Item1 } from './item-1.component';
import { App2l1Feature30Item2 } from './item-2.component';
import { App2l1Feature30Item3 } from './item-3.component';
import { App2l1Feature30Item4 } from './item-4.component';
import { App2l1Feature30Item5 } from './item-5.component';
import { App2l1Feature30Item6 } from './item-6.component';
import { App2l1Feature30Item7 } from './item-7.component';

@Component({
  selector: 'app2l1-feature-30-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App2l1Feature30Item0, App2l1Feature30Item1, App2l1Feature30Item2, App2l1Feature30Item3, App2l1Feature30Item4, App2l1Feature30Item5, App2l1Feature30Item6, App2l1Feature30Item7],
  template: `
    <app2l1-feature-30-item-0 />
    <app2l1-feature-30-item-1 />
    <app2l1-feature-30-item-2 />
    <app2l1-feature-30-item-3 />
    <app2l1-feature-30-item-4 />
    <app2l1-feature-30-item-5 />
    <app2l1-feature-30-item-6 />
    <app2l1-feature-30-item-7 />
  `,
})
export class App2l1Feature30Page {}
