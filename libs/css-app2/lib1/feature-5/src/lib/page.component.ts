import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssApp2l1Feature5Item0 } from './item-0.component';
import { CssApp2l1Feature5Item1 } from './item-1.component';
import { CssApp2l1Feature5Item2 } from './item-2.component';
import { CssApp2l1Feature5Item3 } from './item-3.component';
import { CssApp2l1Feature5Item4 } from './item-4.component';
import { CssApp2l1Feature5Item5 } from './item-5.component';
import { CssApp2l1Feature5Item6 } from './item-6.component';
import { CssApp2l1Feature5Item7 } from './item-7.component';

@Component({
  selector: 'css-app2l1-feature-5-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssApp2l1Feature5Item0, CssApp2l1Feature5Item1, CssApp2l1Feature5Item2, CssApp2l1Feature5Item3, CssApp2l1Feature5Item4, CssApp2l1Feature5Item5, CssApp2l1Feature5Item6, CssApp2l1Feature5Item7],
  template: `
    <css-app2l1-feature-5-item-0 />
    <css-app2l1-feature-5-item-1 />
    <css-app2l1-feature-5-item-2 />
    <css-app2l1-feature-5-item-3 />
    <css-app2l1-feature-5-item-4 />
    <css-app2l1-feature-5-item-5 />
    <css-app2l1-feature-5-item-6 />
    <css-app2l1-feature-5-item-7 />
  `,
})
export class CssApp2l1Feature5Page {}
