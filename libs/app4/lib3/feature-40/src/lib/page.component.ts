import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App4l3Feature40Item0 } from './item-0.component';
import { App4l3Feature40Item1 } from './item-1.component';
import { App4l3Feature40Item2 } from './item-2.component';
import { App4l3Feature40Item3 } from './item-3.component';
import { App4l3Feature40Item4 } from './item-4.component';
import { App4l3Feature40Item5 } from './item-5.component';
import { App4l3Feature40Item6 } from './item-6.component';
import { App4l3Feature40Item7 } from './item-7.component';

@Component({
  selector: 'app4l3-feature-40-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App4l3Feature40Item0, App4l3Feature40Item1, App4l3Feature40Item2, App4l3Feature40Item3, App4l3Feature40Item4, App4l3Feature40Item5, App4l3Feature40Item6, App4l3Feature40Item7],
  template: `
    <app4l3-feature-40-item-0 />
    <app4l3-feature-40-item-1 />
    <app4l3-feature-40-item-2 />
    <app4l3-feature-40-item-3 />
    <app4l3-feature-40-item-4 />
    <app4l3-feature-40-item-5 />
    <app4l3-feature-40-item-6 />
    <app4l3-feature-40-item-7 />
  `,
})
export class App4l3Feature40Page {}
