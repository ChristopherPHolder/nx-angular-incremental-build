import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App4l2Feature16Item0 } from './item-0.component';
import { App4l2Feature16Item1 } from './item-1.component';
import { App4l2Feature16Item2 } from './item-2.component';
import { App4l2Feature16Item3 } from './item-3.component';
import { App4l2Feature16Item4 } from './item-4.component';
import { App4l2Feature16Item5 } from './item-5.component';
import { App4l2Feature16Item6 } from './item-6.component';
import { App4l2Feature16Item7 } from './item-7.component';

@Component({
  selector: 'app4l2-feature-16-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App4l2Feature16Item0, App4l2Feature16Item1, App4l2Feature16Item2, App4l2Feature16Item3, App4l2Feature16Item4, App4l2Feature16Item5, App4l2Feature16Item6, App4l2Feature16Item7],
  template: `
    <app4l2-feature-16-item-0 />
    <app4l2-feature-16-item-1 />
    <app4l2-feature-16-item-2 />
    <app4l2-feature-16-item-3 />
    <app4l2-feature-16-item-4 />
    <app4l2-feature-16-item-5 />
    <app4l2-feature-16-item-6 />
    <app4l2-feature-16-item-7 />
  `,
})
export class App4l2Feature16Page {}
