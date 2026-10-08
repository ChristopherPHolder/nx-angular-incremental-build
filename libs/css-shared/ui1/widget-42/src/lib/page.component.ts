import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssUi1Widget42Item0 } from './item-0.component';
import { CssUi1Widget42Item1 } from './item-1.component';
import { CssUi1Widget42Item2 } from './item-2.component';
import { CssUi1Widget42Item3 } from './item-3.component';
import { CssUi1Widget42Item4 } from './item-4.component';
import { CssUi1Widget42Item5 } from './item-5.component';
import { CssUi1Widget42Item6 } from './item-6.component';
import { CssUi1Widget42Item7 } from './item-7.component';

@Component({
  selector: 'css-ui1-widget-42-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssUi1Widget42Item0, CssUi1Widget42Item1, CssUi1Widget42Item2, CssUi1Widget42Item3, CssUi1Widget42Item4, CssUi1Widget42Item5, CssUi1Widget42Item6, CssUi1Widget42Item7],
  template: `
    <css-ui1-widget-42-item-0 />
    <css-ui1-widget-42-item-1 />
    <css-ui1-widget-42-item-2 />
    <css-ui1-widget-42-item-3 />
    <css-ui1-widget-42-item-4 />
    <css-ui1-widget-42-item-5 />
    <css-ui1-widget-42-item-6 />
    <css-ui1-widget-42-item-7 />
  `,
})
export class CssUi1Widget42Page {}
