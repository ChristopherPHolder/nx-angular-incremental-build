import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'app5-lib0', loadChildren: () => import('@nx-angular-incremental-build/app5-lib0').then((m) => m.App5Lib0Routes) },
  { path: 'app5-lib1', loadChildren: () => import('@nx-angular-incremental-build/app5-lib1').then((m) => m.App5Lib1Routes) },
  { path: 'app5-lib2', loadChildren: () => import('@nx-angular-incremental-build/app5-lib2').then((m) => m.App5Lib2Routes) },
  { path: 'app5-lib3', loadChildren: () => import('@nx-angular-incremental-build/app5-lib3').then((m) => m.App5Lib3Routes) },
  { path: 'app5-lib4', loadChildren: () => import('@nx-angular-incremental-build/app5-lib4').then((m) => m.App5Lib4Routes) },
  { path: 'app5-lib5', loadChildren: () => import('@nx-angular-incremental-build/app5-lib5').then((m) => m.App5Lib5Routes) },
];
