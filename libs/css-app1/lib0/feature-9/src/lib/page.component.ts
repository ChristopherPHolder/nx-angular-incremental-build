import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssApp1l0Feature9Item0 } from './item-0.component';
import { CssApp1l0Feature9Item1 } from './item-1.component';
import { CssApp1l0Feature9Item2 } from './item-2.component';
import { CssApp1l0Feature9Item3 } from './item-3.component';
import { CssApp1l0Feature9Item4 } from './item-4.component';
import { CssApp1l0Feature9Item5 } from './item-5.component';
import { CssApp1l0Feature9Item6 } from './item-6.component';
import { CssApp1l0Feature9Item7 } from './item-7.component';

@Component({
  selector: 'css-app1l0-feature-9-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssApp1l0Feature9Item0, CssApp1l0Feature9Item1, CssApp1l0Feature9Item2, CssApp1l0Feature9Item3, CssApp1l0Feature9Item4, CssApp1l0Feature9Item5, CssApp1l0Feature9Item6, CssApp1l0Feature9Item7],
  template: `
    <css-app1l0-feature-9-item-0 />
    <css-app1l0-feature-9-item-1 />
    <css-app1l0-feature-9-item-2 />
    <css-app1l0-feature-9-item-3 />
    <css-app1l0-feature-9-item-4 />
    <css-app1l0-feature-9-item-5 />
    <css-app1l0-feature-9-item-6 />
    <css-app1l0-feature-9-item-7 />
  `,
})
export class CssApp1l0Feature9Page {}
