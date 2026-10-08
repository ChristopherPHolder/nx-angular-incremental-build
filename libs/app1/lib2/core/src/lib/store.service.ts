import { Injectable, computed, signal } from '@angular/core';

export type Status = 'draft' | 'active' | 'archived';

export interface Item {
  id: number;
  label: string;
  tags: string[];
  score: number;
  price: number;
  status: Status;
  updated: Date;
}

@Injectable({ providedIn: 'root' })
export class Store {
  readonly items = signal<Item[]>(
    Array.from({ length: 20 }, (_, id) => ({
      id,
      label: `Item ${id}`,
      tags: ['a', 'b', 'c'].slice(0, (id % 3) + 1),
      score: id * 3,
      price: id * 9.5,
      status: (['draft', 'active', 'archived'] as const)[id % 3],
      updated: new Date(2026, id % 12, (id % 27) + 1),
    }))
  );
  readonly total = computed(() => this.items().reduce((sum, item) => sum + item.score, 0));
  readonly byStatus = computed(() =>
    this.items().reduce<Record<Status, number>>(
      (acc, item) => ({ ...acc, [item.status]: acc[item.status] + 1 }),
      { draft: 0, active: 0, archived: 0 }
    )
  );
}
