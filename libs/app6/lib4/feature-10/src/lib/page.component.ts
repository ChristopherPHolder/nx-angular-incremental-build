import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App6l4Feature10Item0 } from './item-0.component';
import { App6l4Feature10Item1 } from './item-1.component';
import { App6l4Feature10Item2 } from './item-2.component';
import { App6l4Feature10Item3 } from './item-3.component';
import { App6l4Feature10Item4 } from './item-4.component';
import { App6l4Feature10Item5 } from './item-5.component';
import { App6l4Feature10Item6 } from './item-6.component';
import { App6l4Feature10Item7 } from './item-7.component';

@Component({
  selector: 'app6l4-feature-10-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App6l4Feature10Item0, App6l4Feature10Item1, App6l4Feature10Item2, App6l4Feature10Item3, App6l4Feature10Item4, App6l4Feature10Item5, App6l4Feature10Item6, App6l4Feature10Item7],
  template: `
    <app6l4-feature-10-item-0 />
    <app6l4-feature-10-item-1 />
    <app6l4-feature-10-item-2 />
    <app6l4-feature-10-item-3 />
    <app6l4-feature-10-item-4 />
    <app6l4-feature-10-item-5 />
    <app6l4-feature-10-item-6 />
    <app6l4-feature-10-item-7 />
  `,
})
export class App6l4Feature10Page {}
