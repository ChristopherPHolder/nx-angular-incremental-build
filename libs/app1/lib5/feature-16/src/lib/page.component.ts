import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App1l5Feature16Item0 } from './item-0.component';
import { App1l5Feature16Item1 } from './item-1.component';
import { App1l5Feature16Item2 } from './item-2.component';
import { App1l5Feature16Item3 } from './item-3.component';
import { App1l5Feature16Item4 } from './item-4.component';
import { App1l5Feature16Item5 } from './item-5.component';
import { App1l5Feature16Item6 } from './item-6.component';
import { App1l5Feature16Item7 } from './item-7.component';

@Component({
  selector: 'app1l5-feature-16-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App1l5Feature16Item0, App1l5Feature16Item1, App1l5Feature16Item2, App1l5Feature16Item3, App1l5Feature16Item4, App1l5Feature16Item5, App1l5Feature16Item6, App1l5Feature16Item7],
  template: `
    <app1l5-feature-16-item-0 />
    <app1l5-feature-16-item-1 />
    <app1l5-feature-16-item-2 />
    <app1l5-feature-16-item-3 />
    <app1l5-feature-16-item-4 />
    <app1l5-feature-16-item-5 />
    <app1l5-feature-16-item-6 />
    <app1l5-feature-16-item-7 />
  `,
})
export class App1l5Feature16Page {}
