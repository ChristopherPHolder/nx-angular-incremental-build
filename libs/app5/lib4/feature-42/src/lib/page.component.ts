import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App5l4Feature42Item0 } from './item-0.component';
import { App5l4Feature42Item1 } from './item-1.component';
import { App5l4Feature42Item2 } from './item-2.component';
import { App5l4Feature42Item3 } from './item-3.component';
import { App5l4Feature42Item4 } from './item-4.component';
import { App5l4Feature42Item5 } from './item-5.component';
import { App5l4Feature42Item6 } from './item-6.component';
import { App5l4Feature42Item7 } from './item-7.component';

@Component({
  selector: 'app5l4-feature-42-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App5l4Feature42Item0, App5l4Feature42Item1, App5l4Feature42Item2, App5l4Feature42Item3, App5l4Feature42Item4, App5l4Feature42Item5, App5l4Feature42Item6, App5l4Feature42Item7],
  template: `
    <app5l4-feature-42-item-0 />
    <app5l4-feature-42-item-1 />
    <app5l4-feature-42-item-2 />
    <app5l4-feature-42-item-3 />
    <app5l4-feature-42-item-4 />
    <app5l4-feature-42-item-5 />
    <app5l4-feature-42-item-6 />
    <app5l4-feature-42-item-7 />
  `,
})
export class App5l4Feature42Page {}
