import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssUi2Widget32Item0 } from './item-0.component';
import { CssUi2Widget32Item1 } from './item-1.component';
import { CssUi2Widget32Item2 } from './item-2.component';
import { CssUi2Widget32Item3 } from './item-3.component';
import { CssUi2Widget32Item4 } from './item-4.component';
import { CssUi2Widget32Item5 } from './item-5.component';
import { CssUi2Widget32Item6 } from './item-6.component';
import { CssUi2Widget32Item7 } from './item-7.component';

@Component({
  selector: 'css-ui2-widget-32-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssUi2Widget32Item0, CssUi2Widget32Item1, CssUi2Widget32Item2, CssUi2Widget32Item3, CssUi2Widget32Item4, CssUi2Widget32Item5, CssUi2Widget32Item6, CssUi2Widget32Item7],
  template: `
    <css-ui2-widget-32-item-0 />
    <css-ui2-widget-32-item-1 />
    <css-ui2-widget-32-item-2 />
    <css-ui2-widget-32-item-3 />
    <css-ui2-widget-32-item-4 />
    <css-ui2-widget-32-item-5 />
    <css-ui2-widget-32-item-6 />
    <css-ui2-widget-32-item-7 />
  `,
})
export class CssUi2Widget32Page {}
