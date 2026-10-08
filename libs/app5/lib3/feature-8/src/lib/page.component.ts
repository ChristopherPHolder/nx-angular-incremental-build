import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App5l3Feature8Item0 } from './item-0.component';
import { App5l3Feature8Item1 } from './item-1.component';
import { App5l3Feature8Item2 } from './item-2.component';
import { App5l3Feature8Item3 } from './item-3.component';
import { App5l3Feature8Item4 } from './item-4.component';
import { App5l3Feature8Item5 } from './item-5.component';
import { App5l3Feature8Item6 } from './item-6.component';
import { App5l3Feature8Item7 } from './item-7.component';

@Component({
  selector: 'app5l3-feature-8-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App5l3Feature8Item0, App5l3Feature8Item1, App5l3Feature8Item2, App5l3Feature8Item3, App5l3Feature8Item4, App5l3Feature8Item5, App5l3Feature8Item6, App5l3Feature8Item7],
  template: `
    <app5l3-feature-8-item-0 />
    <app5l3-feature-8-item-1 />
    <app5l3-feature-8-item-2 />
    <app5l3-feature-8-item-3 />
    <app5l3-feature-8-item-4 />
    <app5l3-feature-8-item-5 />
    <app5l3-feature-8-item-6 />
    <app5l3-feature-8-item-7 />
  `,
})
export class App5l3Feature8Page {}
