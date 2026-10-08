import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'app6-lib0', loadChildren: () => import('@nx-angular-incremental-build/app6-lib0').then((m) => m.App6Lib0Routes) },
  { path: 'app6-lib1', loadChildren: () => import('@nx-angular-incremental-build/app6-lib1').then((m) => m.App6Lib1Routes) },
  { path: 'app6-lib2', loadChildren: () => import('@nx-angular-incremental-build/app6-lib2').then((m) => m.App6Lib2Routes) },
  { path: 'app6-lib3', loadChildren: () => import('@nx-angular-incremental-build/app6-lib3').then((m) => m.App6Lib3Routes) },
  { path: 'app6-lib4', loadChildren: () => import('@nx-angular-incremental-build/app6-lib4').then((m) => m.App6Lib4Routes) },
  { path: 'app6-lib5', loadChildren: () => import('@nx-angular-incremental-build/app6-lib5').then((m) => m.App6Lib5Routes) },
];
