import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App1l2Feature3Item0 } from './item-0.component';
import { App1l2Feature3Item1 } from './item-1.component';
import { App1l2Feature3Item2 } from './item-2.component';
import { App1l2Feature3Item3 } from './item-3.component';
import { App1l2Feature3Item4 } from './item-4.component';
import { App1l2Feature3Item5 } from './item-5.component';
import { App1l2Feature3Item6 } from './item-6.component';
import { App1l2Feature3Item7 } from './item-7.component';

@Component({
  selector: 'app1l2-feature-3-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App1l2Feature3Item0, App1l2Feature3Item1, App1l2Feature3Item2, App1l2Feature3Item3, App1l2Feature3Item4, App1l2Feature3Item5, App1l2Feature3Item6, App1l2Feature3Item7],
  template: `
    <app1l2-feature-3-item-0 />
    <app1l2-feature-3-item-1 />
    <app1l2-feature-3-item-2 />
    <app1l2-feature-3-item-3 />
    <app1l2-feature-3-item-4 />
    <app1l2-feature-3-item-5 />
    <app1l2-feature-3-item-6 />
    <app1l2-feature-3-item-7 />
  `,
})
export class App1l2Feature3Page {}
