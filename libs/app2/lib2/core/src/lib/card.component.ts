import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app2l2-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="card" [class.card--accent]="accent()">
      <header><h3>{{ title() }}</h3></header>
      <ng-content />
    </section>
  `,
  styles: `
    $radius: 8px;
    .card {
      border-radius: $radius;
      padding: 1rem;
      &--accent { border: 2px solid rebeccapurple; }
      h3 { margin: 0 0 0.5rem; }
    }
  `,
})
export class Card {
  readonly title = input.required<string>();
  readonly accent = input(false);
}
