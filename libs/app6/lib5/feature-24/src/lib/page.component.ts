import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App6l5Feature24Item0 } from './item-0.component';
import { App6l5Feature24Item1 } from './item-1.component';
import { App6l5Feature24Item2 } from './item-2.component';
import { App6l5Feature24Item3 } from './item-3.component';
import { App6l5Feature24Item4 } from './item-4.component';
import { App6l5Feature24Item5 } from './item-5.component';
import { App6l5Feature24Item6 } from './item-6.component';
import { App6l5Feature24Item7 } from './item-7.component';

@Component({
  selector: 'app6l5-feature-24-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App6l5Feature24Item0, App6l5Feature24Item1, App6l5Feature24Item2, App6l5Feature24Item3, App6l5Feature24Item4, App6l5Feature24Item5, App6l5Feature24Item6, App6l5Feature24Item7],
  template: `
    <app6l5-feature-24-item-0 />
    <app6l5-feature-24-item-1 />
    <app6l5-feature-24-item-2 />
    <app6l5-feature-24-item-3 />
    <app6l5-feature-24-item-4 />
    <app6l5-feature-24-item-5 />
    <app6l5-feature-24-item-6 />
    <app6l5-feature-24-item-7 />
  `,
})
export class App6l5Feature24Page {}
