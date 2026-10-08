import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App2l4Feature0Item0 } from './item-0.component';
import { App2l4Feature0Item1 } from './item-1.component';
import { App2l4Feature0Item2 } from './item-2.component';
import { App2l4Feature0Item3 } from './item-3.component';
import { App2l4Feature0Item4 } from './item-4.component';
import { App2l4Feature0Item5 } from './item-5.component';
import { App2l4Feature0Item6 } from './item-6.component';
import { App2l4Feature0Item7 } from './item-7.component';

@Component({
  selector: 'app2l4-feature-0-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App2l4Feature0Item0, App2l4Feature0Item1, App2l4Feature0Item2, App2l4Feature0Item3, App2l4Feature0Item4, App2l4Feature0Item5, App2l4Feature0Item6, App2l4Feature0Item7],
  template: `
    <app2l4-feature-0-item-0 />
    <app2l4-feature-0-item-1 />
    <app2l4-feature-0-item-2 />
    <app2l4-feature-0-item-3 />
    <app2l4-feature-0-item-4 />
    <app2l4-feature-0-item-5 />
    <app2l4-feature-0-item-6 />
    <app2l4-feature-0-item-7 />
  `,
})
export class App2l4Feature0Page {}
