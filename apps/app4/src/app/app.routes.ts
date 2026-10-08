import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'app4-lib0', loadChildren: () => import('@nx-angular-incremental-build/app4-lib0').then((m) => m.App4Lib0Routes) },
  { path: 'app4-lib1', loadChildren: () => import('@nx-angular-incremental-build/app4-lib1').then((m) => m.App4Lib1Routes) },
  { path: 'app4-lib2', loadChildren: () => import('@nx-angular-incremental-build/app4-lib2').then((m) => m.App4Lib2Routes) },
  { path: 'app4-lib3', loadChildren: () => import('@nx-angular-incremental-build/app4-lib3').then((m) => m.App4Lib3Routes) },
  { path: 'app4-lib4', loadChildren: () => import('@nx-angular-incremental-build/app4-lib4').then((m) => m.App4Lib4Routes) },
  { path: 'app4-lib5', loadChildren: () => import('@nx-angular-incremental-build/app4-lib5').then((m) => m.App4Lib5Routes) },
];
