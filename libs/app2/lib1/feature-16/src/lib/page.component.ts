import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App2l1Feature16Item0 } from './item-0.component';
import { App2l1Feature16Item1 } from './item-1.component';
import { App2l1Feature16Item2 } from './item-2.component';
import { App2l1Feature16Item3 } from './item-3.component';
import { App2l1Feature16Item4 } from './item-4.component';
import { App2l1Feature16Item5 } from './item-5.component';
import { App2l1Feature16Item6 } from './item-6.component';
import { App2l1Feature16Item7 } from './item-7.component';

@Component({
  selector: 'app2l1-feature-16-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App2l1Feature16Item0, App2l1Feature16Item1, App2l1Feature16Item2, App2l1Feature16Item3, App2l1Feature16Item4, App2l1Feature16Item5, App2l1Feature16Item6, App2l1Feature16Item7],
  template: `
    <app2l1-feature-16-item-0 />
    <app2l1-feature-16-item-1 />
    <app2l1-feature-16-item-2 />
    <app2l1-feature-16-item-3 />
    <app2l1-feature-16-item-4 />
    <app2l1-feature-16-item-5 />
    <app2l1-feature-16-item-6 />
    <app2l1-feature-16-item-7 />
  `,
})
export class App2l1Feature16Page {}
