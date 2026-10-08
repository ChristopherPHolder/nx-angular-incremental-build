import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Badge, Card, Item, Status, Store } from '@nx-angular-incremental-build/app6-lib3/core';
import { Ui2Widget29Item0 } from '@nx-angular-incremental-build/shared-ui2/widget-29';

interface App6l3Feature29Item0Row {
  item: Item;
  selected: boolean;
  weight: number;
  bucket: 'low' | 'mid' | 'high';
}

type App6l3Feature29Item0Sort = 'label' | 'score' | 'price' | 'updated';

@Component({
  selector: 'app6l3-feature-29-item-0',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Card, Badge, CurrencyPipe, DatePipe, DecimalPipe, Ui2Widget29Item0],
  host: { '[class.has-selection]': 'selectedCount() > 0', '(keydown.escape)': 'reset()' },
  template: `
    <app6l3-card [title]="heading()" [accent]="selectedCount() > 2">
      <p class="summary">{{ summary() }}</p>
      <nav class="filters">
        @for (status of statuses; track status) {
          <button type="button" [class.active]="filter() === status" (click)="filter.set(status)">
            {{ status }} ({{ counts()[status] }})
          </button>
        }
        <select [value]="sort()" (change)="sortBy($any($event.target).value)">
          @for (key of sortKeys; track key) {
            <option [value]="key">{{ key }}</option>
          }
        </select>
      </nav>
      <table>
        <thead>
          <tr><th>Label</th><th>Tags</th><th>Score</th><th>Price</th><th>Updated</th></tr>
        </thead>
        <tbody>
          @for (row of rows(); track row.item.id; let odd = $odd) {
            <tr [class.odd]="odd" [class.selected]="row.selected" (click)="toggle(row.item.id)">
              <td>{{ row.item.label }}</td>
              <td>
                @for (tag of row.item.tags; track tag) {
                  <app6l3-badge [label]="tag" />
                }
              </td>
              <td>
                @switch (row.bucket) {
                  @case ('high') { <strong>{{ row.weight | number: '1.0-1' }}</strong> }
                  @case ('mid') { <span>{{ row.weight | number: '1.0-1' }}</span> }
                  @default { <em>{{ row.weight | number: '1.0-1' }}</em> }
                }
              </td>
              <td>{{ row.item.price | currency: 'EUR' }}</td>
              <td>{{ row.item.updated | date: 'mediumDate' }}</td>
            </tr>
          } @empty {
            <tr><td colspan="5">No items</td></tr>
          }
        </tbody>
      </table>
      @if (selectedCount() > 0) {
        <footer>
          <span>{{ selectedCount() }} selected · {{ selectedTotal() | currency: 'EUR' }}</span>
          <button type="button" (click)="reset()">Reset</button>
        </footer>
      }
      <ui2-widget-29-item-0 />
    </app6l3-card>
  `,
  styles: `
    @use 'sass:color';
    @use 'sass:map';
    @use 'sass:math';
    $gap: 4px;
    $palette: (low: #4a7, mid: #e93, high: #c33);
    @mixin chip($color) {
      padding: math.div($gap, 2) $gap;
      border-radius: $gap;
      background: color.adjust($color, $lightness: 35%);
      color: color.adjust($color, $lightness: -15%);
    }
    :host { display: block; margin: $gap * 2; &.has-selection { outline: 1px solid map.get($palette, mid); } }
    .summary { font-size: 0.875rem; }
    .filters {
      display: flex;
      gap: $gap;
      button { @include chip(#336699); &.active { @include chip(#663399); } }
    }
    table { width: 100%; border-collapse: collapse; }
    tr {
      &.odd { background: color.adjust(#336699, $lightness: 45%); }
      &.selected { background: color.adjust(#336699, $lightness: 20%); }
      &:hover { outline: 1px dashed #999; }
    }
    @each $name, $color in $palette {
      .bucket-#{$name} { @include chip($color); }
    }
    @for $n from 1 through 6 {
      .col-#{$n} { width: math.percentage(math.div($n, 6)); }
    }
    footer { display: flex; justify-content: space-between; margin-top: $gap * 2; }
  `,
})
export class App6l3Feature29Item0 {
  private readonly store = inject(Store);
  readonly heading = input('feature-29 item 0');
  readonly threshold = input(10);
  readonly changed = output<number[]>();
  readonly statuses: Status[] = ['draft', 'active', 'archived'];
  readonly sortKeys: App6l3Feature29Item0Sort[] = ['label', 'score', 'price', 'updated'];
  readonly filter = signal<Status>('active');
  readonly sort = signal<App6l3Feature29Item0Sort>('score');
  private readonly selected = signal<number[]>([]);

  readonly counts = this.store.byStatus;
  readonly rows = computed<App6l3Feature29Item0Row[]>(() =>
    this.store
      .items()
      .filter((item) => item.status === this.filter())
      .sort((a, b) => this.compare(a, b))
      .map((item) => {
        const weight = item.score * 1 + item.price / 2;
        return {
          item,
          selected: this.selected().includes(item.id),
          weight,
          bucket: weight > this.threshold() * 2 ? 'high' : weight > this.threshold() ? 'mid' : 'low',
        };
      })
  );
  readonly selectedCount = computed(() => this.selected().length);
  readonly selectedTotal = computed(() =>
    this.rows()
      .filter((row) => row.selected)
      .reduce((sum, row) => sum + row.item.price, 0)
  );
  readonly summary = computed(() => `${this.selectedCount()} of ${this.rows().length} selected, total ${this.store.total()}`);

  sortBy(key: App6l3Feature29Item0Sort) {
    this.sort.set(key);
  }

  toggle(id: number) {
    this.selected.update((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));
    this.changed.emit(this.selected());
  }

  reset() {
    this.selected.set([]);
    this.changed.emit([]);
  }

  private compare(a: Item, b: Item): number {
    switch (this.sort()) {
      case 'label':
        return a.label.localeCompare(b.label);
      case 'price':
        return a.price - b.price;
      case 'updated':
        return a.updated.getTime() - b.updated.getTime();
      default:
        return b.score - a.score;
    }
  }
}
