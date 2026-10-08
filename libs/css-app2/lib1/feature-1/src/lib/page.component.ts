import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssApp2l1Feature1Item0 } from './item-0.component';
import { CssApp2l1Feature1Item1 } from './item-1.component';
import { CssApp2l1Feature1Item2 } from './item-2.component';
import { CssApp2l1Feature1Item3 } from './item-3.component';
import { CssApp2l1Feature1Item4 } from './item-4.component';
import { CssApp2l1Feature1Item5 } from './item-5.component';
import { CssApp2l1Feature1Item6 } from './item-6.component';
import { CssApp2l1Feature1Item7 } from './item-7.component';

@Component({
  selector: 'css-app2l1-feature-1-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssApp2l1Feature1Item0, CssApp2l1Feature1Item1, CssApp2l1Feature1Item2, CssApp2l1Feature1Item3, CssApp2l1Feature1Item4, CssApp2l1Feature1Item5, CssApp2l1Feature1Item6, CssApp2l1Feature1Item7],
  template: `
    <css-app2l1-feature-1-item-0 />
    <css-app2l1-feature-1-item-1 />
    <css-app2l1-feature-1-item-2 />
    <css-app2l1-feature-1-item-3 />
    <css-app2l1-feature-1-item-4 />
    <css-app2l1-feature-1-item-5 />
    <css-app2l1-feature-1-item-6 />
    <css-app2l1-feature-1-item-7 />
  `,
})
export class CssApp2l1Feature1Page {}
