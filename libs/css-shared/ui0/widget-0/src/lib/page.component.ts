import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssUi0Widget0Item0 } from './item-0.component';
import { CssUi0Widget0Item1 } from './item-1.component';
import { CssUi0Widget0Item2 } from './item-2.component';
import { CssUi0Widget0Item3 } from './item-3.component';
import { CssUi0Widget0Item4 } from './item-4.component';
import { CssUi0Widget0Item5 } from './item-5.component';
import { CssUi0Widget0Item6 } from './item-6.component';
import { CssUi0Widget0Item7 } from './item-7.component';

@Component({
  selector: 'css-ui0-widget-0-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssUi0Widget0Item0, CssUi0Widget0Item1, CssUi0Widget0Item2, CssUi0Widget0Item3, CssUi0Widget0Item4, CssUi0Widget0Item5, CssUi0Widget0Item6, CssUi0Widget0Item7],
  template: `
    <css-ui0-widget-0-item-0 />
    <css-ui0-widget-0-item-1 />
    <css-ui0-widget-0-item-2 />
    <css-ui0-widget-0-item-3 />
    <css-ui0-widget-0-item-4 />
    <css-ui0-widget-0-item-5 />
    <css-ui0-widget-0-item-6 />
    <css-ui0-widget-0-item-7 />
  `,
})
export class CssUi0Widget0Page {}
