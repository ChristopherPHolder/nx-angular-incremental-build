import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssApp1l3Feature11Item0 } from './item-0.component';
import { CssApp1l3Feature11Item1 } from './item-1.component';
import { CssApp1l3Feature11Item2 } from './item-2.component';
import { CssApp1l3Feature11Item3 } from './item-3.component';
import { CssApp1l3Feature11Item4 } from './item-4.component';
import { CssApp1l3Feature11Item5 } from './item-5.component';
import { CssApp1l3Feature11Item6 } from './item-6.component';
import { CssApp1l3Feature11Item7 } from './item-7.component';

@Component({
  selector: 'css-app1l3-feature-11-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssApp1l3Feature11Item0, CssApp1l3Feature11Item1, CssApp1l3Feature11Item2, CssApp1l3Feature11Item3, CssApp1l3Feature11Item4, CssApp1l3Feature11Item5, CssApp1l3Feature11Item6, CssApp1l3Feature11Item7],
  template: `
    <css-app1l3-feature-11-item-0 />
    <css-app1l3-feature-11-item-1 />
    <css-app1l3-feature-11-item-2 />
    <css-app1l3-feature-11-item-3 />
    <css-app1l3-feature-11-item-4 />
    <css-app1l3-feature-11-item-5 />
    <css-app1l3-feature-11-item-6 />
    <css-app1l3-feature-11-item-7 />
  `,
})
export class CssApp1l3Feature11Page {}
