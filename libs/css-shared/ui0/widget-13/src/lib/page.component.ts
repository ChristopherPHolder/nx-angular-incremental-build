import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssUi0Widget13Item0 } from './item-0.component';
import { CssUi0Widget13Item1 } from './item-1.component';
import { CssUi0Widget13Item2 } from './item-2.component';
import { CssUi0Widget13Item3 } from './item-3.component';
import { CssUi0Widget13Item4 } from './item-4.component';
import { CssUi0Widget13Item5 } from './item-5.component';
import { CssUi0Widget13Item6 } from './item-6.component';
import { CssUi0Widget13Item7 } from './item-7.component';

@Component({
  selector: 'css-ui0-widget-13-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssUi0Widget13Item0, CssUi0Widget13Item1, CssUi0Widget13Item2, CssUi0Widget13Item3, CssUi0Widget13Item4, CssUi0Widget13Item5, CssUi0Widget13Item6, CssUi0Widget13Item7],
  template: `
    <css-ui0-widget-13-item-0 />
    <css-ui0-widget-13-item-1 />
    <css-ui0-widget-13-item-2 />
    <css-ui0-widget-13-item-3 />
    <css-ui0-widget-13-item-4 />
    <css-ui0-widget-13-item-5 />
    <css-ui0-widget-13-item-6 />
    <css-ui0-widget-13-item-7 />
  `,
})
export class CssUi0Widget13Page {}
