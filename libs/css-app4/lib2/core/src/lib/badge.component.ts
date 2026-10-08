import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'css-app4l2-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="badge">{{ label() }}</span>`,
  styles: `
    .badge { display: inline-block; padding: 0 0.25rem; border-radius: 4px; background: #eee; }
  `,
})
export class Badge {
  readonly label = input.required<string>();
}
