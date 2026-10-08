import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CssApp4l3Feature2Item0 } from './item-0.component';
import { CssApp4l3Feature2Item1 } from './item-1.component';
import { CssApp4l3Feature2Item2 } from './item-2.component';
import { CssApp4l3Feature2Item3 } from './item-3.component';
import { CssApp4l3Feature2Item4 } from './item-4.component';
import { CssApp4l3Feature2Item5 } from './item-5.component';
import { CssApp4l3Feature2Item6 } from './item-6.component';
import { CssApp4l3Feature2Item7 } from './item-7.component';

@Component({
  selector: 'css-app4l3-feature-2-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CssApp4l3Feature2Item0, CssApp4l3Feature2Item1, CssApp4l3Feature2Item2, CssApp4l3Feature2Item3, CssApp4l3Feature2Item4, CssApp4l3Feature2Item5, CssApp4l3Feature2Item6, CssApp4l3Feature2Item7],
  template: `
    <css-app4l3-feature-2-item-0 />
    <css-app4l3-feature-2-item-1 />
    <css-app4l3-feature-2-item-2 />
    <css-app4l3-feature-2-item-3 />
    <css-app4l3-feature-2-item-4 />
    <css-app4l3-feature-2-item-5 />
    <css-app4l3-feature-2-item-6 />
    <css-app4l3-feature-2-item-7 />
  `,
})
export class CssApp4l3Feature2Page {}
