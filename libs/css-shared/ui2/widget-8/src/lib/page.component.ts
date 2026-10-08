import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssUi2Widget8Item0 } from './item-0.component';
import { CssUi2Widget8Item1 } from './item-1.component';
import { CssUi2Widget8Item2 } from './item-2.component';
import { CssUi2Widget8Item3 } from './item-3.component';
import { CssUi2Widget8Item4 } from './item-4.component';
import { CssUi2Widget8Item5 } from './item-5.component';
import { CssUi2Widget8Item6 } from './item-6.component';
import { CssUi2Widget8Item7 } from './item-7.component';

@Component({
  selector: 'css-ui2-widget-8-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssUi2Widget8Item0, CssUi2Widget8Item1, CssUi2Widget8Item2, CssUi2Widget8Item3, CssUi2Widget8Item4, CssUi2Widget8Item5, CssUi2Widget8Item6, CssUi2Widget8Item7],
  template: `
    <css-ui2-widget-8-item-0 />
    <css-ui2-widget-8-item-1 />
    <css-ui2-widget-8-item-2 />
    <css-ui2-widget-8-item-3 />
    <css-ui2-widget-8-item-4 />
    <css-ui2-widget-8-item-5 />
    <css-ui2-widget-8-item-6 />
    <css-ui2-widget-8-item-7 />
  `,
})
export class CssUi2Widget8Page {}
