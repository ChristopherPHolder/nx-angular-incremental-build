import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App1l3Feature15Item0 } from './item-0.component';
import { App1l3Feature15Item1 } from './item-1.component';
import { App1l3Feature15Item2 } from './item-2.component';
import { App1l3Feature15Item3 } from './item-3.component';
import { App1l3Feature15Item4 } from './item-4.component';
import { App1l3Feature15Item5 } from './item-5.component';
import { App1l3Feature15Item6 } from './item-6.component';
import { App1l3Feature15Item7 } from './item-7.component';

@Component({
  selector: 'app1l3-feature-15-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App1l3Feature15Item0, App1l3Feature15Item1, App1l3Feature15Item2, App1l3Feature15Item3, App1l3Feature15Item4, App1l3Feature15Item5, App1l3Feature15Item6, App1l3Feature15Item7],
  template: `
    <app1l3-feature-15-item-0 />
    <app1l3-feature-15-item-1 />
    <app1l3-feature-15-item-2 />
    <app1l3-feature-15-item-3 />
    <app1l3-feature-15-item-4 />
    <app1l3-feature-15-item-5 />
    <app1l3-feature-15-item-6 />
    <app1l3-feature-15-item-7 />
  `,
})
export class App1l3Feature15Page {}
