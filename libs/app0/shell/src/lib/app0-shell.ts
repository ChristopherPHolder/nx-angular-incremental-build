import { Component } from '@angular/core';
import { App0Lib0 } from '@nx-angular-incremental-build/app-lib0';
import { App0Lib1 } from '@nx-angular-incremental-build/app0-lib1';
import { App0Lib2 } from '@nx-angular-incremental-build/app0-lib2';
import { App0Lib3 } from '@nx-angular-incremental-build/app0-lib3';
import { App0Lib4 } from '@nx-angular-incremental-build/app0-lib4';

@Component({
  template: `
    <app0-lib0 />
    <app0-lib1 />
    <app0-lib2 />
    <app0-lib3 />
    <app0-lib4 />
  `,
  imports: [App0Lib0, App0Lib1, App0Lib2, App0Lib3, App0Lib4],
})
export class App0Shell {}
