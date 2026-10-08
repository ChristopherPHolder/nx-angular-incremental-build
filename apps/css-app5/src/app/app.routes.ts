import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'css-app5-lib0', loadChildren: () => import('@nx-angular-incremental-build/css-app5-lib0').then((m) => m.CssApp5Lib0Routes) },
  { path: 'css-app5-lib1', loadChildren: () => import('@nx-angular-incremental-build/css-app5-lib1').then((m) => m.CssApp5Lib1Routes) },
  { path: 'css-app5-lib2', loadChildren: () => import('@nx-angular-incremental-build/css-app5-lib2').then((m) => m.CssApp5Lib2Routes) },
  { path: 'css-app5-lib3', loadChildren: () => import('@nx-angular-incremental-build/css-app5-lib3').then((m) => m.CssApp5Lib3Routes) },
  { path: 'css-app5-lib4', loadChildren: () => import('@nx-angular-incremental-build/css-app5-lib4').then((m) => m.CssApp5Lib4Routes) },
  { path: 'css-app5-lib5', loadChildren: () => import('@nx-angular-incremental-build/css-app5-lib5').then((m) => m.CssApp5Lib5Routes) },
];
