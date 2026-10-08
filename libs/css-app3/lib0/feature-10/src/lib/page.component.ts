import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssApp3l0Feature10Item0 } from './item-0.component';
import { CssApp3l0Feature10Item1 } from './item-1.component';
import { CssApp3l0Feature10Item2 } from './item-2.component';
import { CssApp3l0Feature10Item3 } from './item-3.component';
import { CssApp3l0Feature10Item4 } from './item-4.component';
import { CssApp3l0Feature10Item5 } from './item-5.component';
import { CssApp3l0Feature10Item6 } from './item-6.component';
import { CssApp3l0Feature10Item7 } from './item-7.component';

@Component({
  selector: 'css-app3l0-feature-10-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssApp3l0Feature10Item0, CssApp3l0Feature10Item1, CssApp3l0Feature10Item2, CssApp3l0Feature10Item3, CssApp3l0Feature10Item4, CssApp3l0Feature10Item5, CssApp3l0Feature10Item6, CssApp3l0Feature10Item7],
  template: `
    <css-app3l0-feature-10-item-0 />
    <css-app3l0-feature-10-item-1 />
    <css-app3l0-feature-10-item-2 />
    <css-app3l0-feature-10-item-3 />
    <css-app3l0-feature-10-item-4 />
    <css-app3l0-feature-10-item-5 />
    <css-app3l0-feature-10-item-6 />
    <css-app3l0-feature-10-item-7 />
  `,
})
export class CssApp3l0Feature10Page {}
