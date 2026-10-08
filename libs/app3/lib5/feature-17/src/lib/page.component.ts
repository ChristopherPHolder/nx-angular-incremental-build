import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App3l5Feature17Item0 } from './item-0.component';
import { App3l5Feature17Item1 } from './item-1.component';
import { App3l5Feature17Item2 } from './item-2.component';
import { App3l5Feature17Item3 } from './item-3.component';
import { App3l5Feature17Item4 } from './item-4.component';
import { App3l5Feature17Item5 } from './item-5.component';
import { App3l5Feature17Item6 } from './item-6.component';
import { App3l5Feature17Item7 } from './item-7.component';

@Component({
  selector: 'app3l5-feature-17-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [App3l5Feature17Item0, App3l5Feature17Item1, App3l5Feature17Item2, App3l5Feature17Item3, App3l5Feature17Item4, App3l5Feature17Item5, App3l5Feature17Item6, App3l5Feature17Item7],
  template: `
    <app3l5-feature-17-item-0 />
    <app3l5-feature-17-item-1 />
    <app3l5-feature-17-item-2 />
    <app3l5-feature-17-item-3 />
    <app3l5-feature-17-item-4 />
    <app3l5-feature-17-item-5 />
    <app3l5-feature-17-item-6 />
    <app3l5-feature-17-item-7 />
  `,
})
export class App3l5Feature17Page {}
