import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Badge, Card, Item, Status, Store } from '@nx-angular-incremental-build/css-app2-lib5/core';

interface CssApp2l5Feature20Item3Row {
  item: Item;
  selected: boolean;
  weight: number;
  bucket: 'low' | 'mid' | 'high';
}

type CssApp2l5Feature20Item3Sort = 'label' | 'score' | 'price' | 'updated';

@Component({
  selector: 'css-app2l5-feature-20-item-3',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Card, Badge, CurrencyPipe, DatePipe, DecimalPipe],
  host: { '[class.has-selection]': 'selectedCount() > 0', '(keydown.escape)': 'reset()' },
  template: `
    <css-app2l5-card [title]="heading()" [accent]="selectedCount() > 2">
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
                  <css-app2l5-badge [label]="tag" />
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
    </css-app2l5-card>
  `,
  styles: `
    :host { display: block; margin: 8px; }
    :host(.has-selection) { outline: 1px solid #e93; }
    .summary { font-size: 0.875rem; }
    .filters { display: flex; gap: 4px; }
    .filters button { padding: 2px 4px; border-radius: 4px; background: hsl(210, 50%, 75%); color: hsl(210, 50%, 25%); }
    .filters button.active { padding: 2px 4px; border-radius: 4px; background: hsl(270, 50%, 75%); color: hsl(270, 50%, 25%); }
    table { width: 100%; border-collapse: collapse; }
    tr.odd { background: hsl(210, 50%, 88%); }
    tr.selected { background: hsl(210, 50%, 63%); }
    tr:hover { outline: 1px dashed #999; }
    .bucket-low { padding: 2px 4px; border-radius: 4px; background: hsl(150, 50%, 75%); color: hsl(150, 50%, 25%); }
    .bucket-mid { padding: 2px 4px; border-radius: 4px; background: hsl(35, 50%, 75%); color: hsl(35, 50%, 25%); }
    .bucket-high { padding: 2px 4px; border-radius: 4px; background: hsl(0, 50%, 75%); color: hsl(0, 50%, 25%); }
    .col-1 { width: 16.6667%; }
    .col-2 { width: 33.3333%; }
    .col-3 { width: 50.0000%; }
    .col-4 { width: 66.6667%; }
    .col-5 { width: 83.3333%; }
    .col-6 { width: 100.0000%; }
    footer { display: flex; justify-content: space-between; margin-top: 8px; }
  `,
})
export class CssApp2l5Feature20Item3 {
  private readonly store = inject(Store);
  readonly heading = input('feature-20 item 3');
  readonly threshold = input(19);
  readonly changed = output<number[]>();
  readonly statuses: Status[] = ['draft', 'active', 'archived'];
  readonly sortKeys: CssApp2l5Feature20Item3Sort[] = ['label', 'score', 'price', 'updated'];
  readonly filter = signal<Status>('active');
  readonly sort = signal<CssApp2l5Feature20Item3Sort>('score');
  private readonly selected = signal<number[]>([]);

  readonly counts = this.store.byStatus;
  readonly rows = computed<CssApp2l5Feature20Item3Row[]>(() =>
    this.store
      .items()
      .filter((item) => item.status === this.filter())
      .sort((a, b) => this.compare(a, b))
      .map((item) => {
        const weight = item.score * 4 + item.price / 5;
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

  sortBy(key: CssApp2l5Feature20Item3Sort) {
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
