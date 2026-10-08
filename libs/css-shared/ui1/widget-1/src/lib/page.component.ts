import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssUi1Widget1Item0 } from './item-0.component';
import { CssUi1Widget1Item1 } from './item-1.component';
import { CssUi1Widget1Item2 } from './item-2.component';
import { CssUi1Widget1Item3 } from './item-3.component';
import { CssUi1Widget1Item4 } from './item-4.component';
import { CssUi1Widget1Item5 } from './item-5.component';
import { CssUi1Widget1Item6 } from './item-6.component';
import { CssUi1Widget1Item7 } from './item-7.component';

@Component({
  selector: 'css-ui1-widget-1-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssUi1Widget1Item0, CssUi1Widget1Item1, CssUi1Widget1Item2, CssUi1Widget1Item3, CssUi1Widget1Item4, CssUi1Widget1Item5, CssUi1Widget1Item6, CssUi1Widget1Item7],
  template: `
    <css-ui1-widget-1-item-0 />
    <css-ui1-widget-1-item-1 />
    <css-ui1-widget-1-item-2 />
    <css-ui1-widget-1-item-3 />
    <css-ui1-widget-1-item-4 />
    <css-ui1-widget-1-item-5 />
    <css-ui1-widget-1-item-6 />
    <css-ui1-widget-1-item-7 />
  `,
})
export class CssUi1Widget1Page {}
