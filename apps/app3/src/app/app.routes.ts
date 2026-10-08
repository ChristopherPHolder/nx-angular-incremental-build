import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'app3-lib0', loadChildren: () => import('@nx-angular-incremental-build/app3-lib0').then((m) => m.App3Lib0Routes) },
  { path: 'app3-lib1', loadChildren: () => import('@nx-angular-incremental-build/app3-lib1').then((m) => m.App3Lib1Routes) },
  { path: 'app3-lib2', loadChildren: () => import('@nx-angular-incremental-build/app3-lib2').then((m) => m.App3Lib2Routes) },
  { path: 'app3-lib3', loadChildren: () => import('@nx-angular-incremental-build/app3-lib3').then((m) => m.App3Lib3Routes) },
  { path: 'app3-lib4', loadChildren: () => import('@nx-angular-incremental-build/app3-lib4').then((m) => m.App3Lib4Routes) },
  { path: 'app3-lib5', loadChildren: () => import('@nx-angular-incremental-build/app3-lib5').then((m) => m.App3Lib5Routes) },
];
