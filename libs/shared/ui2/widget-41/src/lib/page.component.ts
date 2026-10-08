import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Ui2Widget41Item0 } from './item-0.component';
import { Ui2Widget41Item1 } from './item-1.component';
import { Ui2Widget41Item2 } from './item-2.component';
import { Ui2Widget41Item3 } from './item-3.component';
import { Ui2Widget41Item4 } from './item-4.component';
import { Ui2Widget41Item5 } from './item-5.component';
import { Ui2Widget41Item6 } from './item-6.component';
import { Ui2Widget41Item7 } from './item-7.component';

@Component({
  selector: 'ui2-widget-41-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Ui2Widget41Item0, Ui2Widget41Item1, Ui2Widget41Item2, Ui2Widget41Item3, Ui2Widget41Item4, Ui2Widget41Item5, Ui2Widget41Item6, Ui2Widget41Item7],
  template: `
    <ui2-widget-41-item-0 />
    <ui2-widget-41-item-1 />
    <ui2-widget-41-item-2 />
    <ui2-widget-41-item-3 />
    <ui2-widget-41-item-4 />
    <ui2-widget-41-item-5 />
    <ui2-widget-41-item-6 />
    <ui2-widget-41-item-7 />
  `,
})
export class Ui2Widget41Page {}
