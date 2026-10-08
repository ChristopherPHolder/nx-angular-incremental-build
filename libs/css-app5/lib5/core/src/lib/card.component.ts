import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'css-app5l5-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="card" [class.card--accent]="accent()">
      <header><h3>{{ title() }}</h3></header>
      <ng-content />
    </section>
  `,
  styles: `
    .card { border-radius: 8px; padding: 1rem; }
    .card--accent { border: 2px solid rebeccapurple; }
    .card h3 { margin: 0 0 0.5rem; }
  `,
})
export class Card {
  readonly title = input.required<string>();
  readonly accent = input(false);
}
