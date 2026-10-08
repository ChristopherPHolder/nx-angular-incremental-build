import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'app1-lib0', loadChildren: () => import('@nx-angular-incremental-build/app1-lib0').then((m) => m.App1Lib0Routes) },
  { path: 'app1-lib1', loadChildren: () => import('@nx-angular-incremental-build/app1-lib1').then((m) => m.App1Lib1Routes) },
  { path: 'app1-lib2', loadChildren: () => import('@nx-angular-incremental-build/app1-lib2').then((m) => m.App1Lib2Routes) },
  { path: 'app1-lib3', loadChildren: () => import('@nx-angular-incremental-build/app1-lib3').then((m) => m.App1Lib3Routes) },
  { path: 'app1-lib4', loadChildren: () => import('@nx-angular-incremental-build/app1-lib4').then((m) => m.App1Lib4Routes) },
  { path: 'app1-lib5', loadChildren: () => import('@nx-angular-incremental-build/app1-lib5').then((m) => m.App1Lib5Routes) },
];
