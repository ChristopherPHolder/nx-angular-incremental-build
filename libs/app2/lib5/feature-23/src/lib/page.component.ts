import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App2l5Feature23Item0 } from './item-0.component';
import { App2l5Feature23Item1 } from './item-1.component';
import { App2l5Feature23Item2 } from './item-2.component';
import { App2l5Feature23Item3 } from './item-3.component';
import { App2l5Feature23Item4 } from './item-4.component';
import { App2l5Feature23Item5 } from './item-5.component';
import { App2l5Feature23Item6 } from './item-6.component';
import { App2l5Feature23Item7 } from './item-7.component';

@Component({
  selector: 'app2l5-feature-23-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App2l5Feature23Item0, App2l5Feature23Item1, App2l5Feature23Item2, App2l5Feature23Item3, App2l5Feature23Item4, App2l5Feature23Item5, App2l5Feature23Item6, App2l5Feature23Item7],
  template: `
    <app2l5-feature-23-item-0 />
    <app2l5-feature-23-item-1 />
    <app2l5-feature-23-item-2 />
    <app2l5-feature-23-item-3 />
    <app2l5-feature-23-item-4 />
    <app2l5-feature-23-item-5 />
    <app2l5-feature-23-item-6 />
    <app2l5-feature-23-item-7 />
  `,
})
export class App2l5Feature23Page {}
