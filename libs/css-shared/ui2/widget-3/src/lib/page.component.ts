import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssUi2Widget3Item0 } from './item-0.component';
import { CssUi2Widget3Item1 } from './item-1.component';
import { CssUi2Widget3Item2 } from './item-2.component';
import { CssUi2Widget3Item3 } from './item-3.component';
import { CssUi2Widget3Item4 } from './item-4.component';
import { CssUi2Widget3Item5 } from './item-5.component';
import { CssUi2Widget3Item6 } from './item-6.component';
import { CssUi2Widget3Item7 } from './item-7.component';

@Component({
  selector: 'css-ui2-widget-3-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssUi2Widget3Item0, CssUi2Widget3Item1, CssUi2Widget3Item2, CssUi2Widget3Item3, CssUi2Widget3Item4, CssUi2Widget3Item5, CssUi2Widget3Item6, CssUi2Widget3Item7],
  template: `
    <css-ui2-widget-3-item-0 />
    <css-ui2-widget-3-item-1 />
    <css-ui2-widget-3-item-2 />
    <css-ui2-widget-3-item-3 />
    <css-ui2-widget-3-item-4 />
    <css-ui2-widget-3-item-5 />
    <css-ui2-widget-3-item-6 />
    <css-ui2-widget-3-item-7 />
  `,
})
export class CssUi2Widget3Page {}
