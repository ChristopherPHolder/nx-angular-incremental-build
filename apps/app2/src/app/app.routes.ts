import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'app2-lib0', loadChildren: () => import('@nx-angular-incremental-build/app2-lib0').then((m) => m.App2Lib0Routes) },
  { path: 'app2-lib1', loadChildren: () => import('@nx-angular-incremental-build/app2-lib1').then((m) => m.App2Lib1Routes) },
  { path: 'app2-lib2', loadChildren: () => import('@nx-angular-incremental-build/app2-lib2').then((m) => m.App2Lib2Routes) },
  { path: 'app2-lib3', loadChildren: () => import('@nx-angular-incremental-build/app2-lib3').then((m) => m.App2Lib3Routes) },
  { path: 'app2-lib4', loadChildren: () => import('@nx-angular-incremental-build/app2-lib4').then((m) => m.App2Lib4Routes) },
  { path: 'app2-lib5', loadChildren: () => import('@nx-angular-incremental-build/app2-lib5').then((m) => m.App2Lib5Routes) },
];
