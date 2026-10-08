import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssUi1Widget31Item0 } from './item-0.component';
import { CssUi1Widget31Item1 } from './item-1.component';
import { CssUi1Widget31Item2 } from './item-2.component';
import { CssUi1Widget31Item3 } from './item-3.component';
import { CssUi1Widget31Item4 } from './item-4.component';
import { CssUi1Widget31Item5 } from './item-5.component';
import { CssUi1Widget31Item6 } from './item-6.component';
import { CssUi1Widget31Item7 } from './item-7.component';

@Component({
  selector: 'css-ui1-widget-31-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssUi1Widget31Item0, CssUi1Widget31Item1, CssUi1Widget31Item2, CssUi1Widget31Item3, CssUi1Widget31Item4, CssUi1Widget31Item5, CssUi1Widget31Item6, CssUi1Widget31Item7],
  template: `
    <css-ui1-widget-31-item-0 />
    <css-ui1-widget-31-item-1 />
    <css-ui1-widget-31-item-2 />
    <css-ui1-widget-31-item-3 />
    <css-ui1-widget-31-item-4 />
    <css-ui1-widget-31-item-5 />
    <css-ui1-widget-31-item-6 />
    <css-ui1-widget-31-item-7 />
  `,
})
export class CssUi1Widget31Page {}
