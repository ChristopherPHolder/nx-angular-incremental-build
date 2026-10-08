import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App4l4Feature5Item0 } from './item-0.component';
import { App4l4Feature5Item1 } from './item-1.component';
import { App4l4Feature5Item2 } from './item-2.component';
import { App4l4Feature5Item3 } from './item-3.component';
import { App4l4Feature5Item4 } from './item-4.component';
import { App4l4Feature5Item5 } from './item-5.component';
import { App4l4Feature5Item6 } from './item-6.component';
import { App4l4Feature5Item7 } from './item-7.component';

@Component({
  selector: 'app4l4-feature-5-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App4l4Feature5Item0, App4l4Feature5Item1, App4l4Feature5Item2, App4l4Feature5Item3, App4l4Feature5Item4, App4l4Feature5Item5, App4l4Feature5Item6, App4l4Feature5Item7],
  template: `
    <app4l4-feature-5-item-0 />
    <app4l4-feature-5-item-1 />
    <app4l4-feature-5-item-2 />
    <app4l4-feature-5-item-3 />
    <app4l4-feature-5-item-4 />
    <app4l4-feature-5-item-5 />
    <app4l4-feature-5-item-6 />
    <app4l4-feature-5-item-7 />
  `,
})
export class App4l4Feature5Page {}
