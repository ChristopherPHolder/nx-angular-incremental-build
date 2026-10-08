import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Ui2Widget30Item0 } from './item-0.component';
import { Ui2Widget30Item1 } from './item-1.component';
import { Ui2Widget30Item2 } from './item-2.component';
import { Ui2Widget30Item3 } from './item-3.component';
import { Ui2Widget30Item4 } from './item-4.component';
import { Ui2Widget30Item5 } from './item-5.component';
import { Ui2Widget30Item6 } from './item-6.component';
import { Ui2Widget30Item7 } from './item-7.component';

@Component({
  selector: 'ui2-widget-30-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Ui2Widget30Item0, Ui2Widget30Item1, Ui2Widget30Item2, Ui2Widget30Item3, Ui2Widget30Item4, Ui2Widget30Item5, Ui2Widget30Item6, Ui2Widget30Item7],
  template: `
    <ui2-widget-30-item-0 />
    <ui2-widget-30-item-1 />
    <ui2-widget-30-item-2 />
    <ui2-widget-30-item-3 />
    <ui2-widget-30-item-4 />
    <ui2-widget-30-item-5 />
    <ui2-widget-30-item-6 />
    <ui2-widget-30-item-7 />
  `,
})
export class Ui2Widget30Page {}
