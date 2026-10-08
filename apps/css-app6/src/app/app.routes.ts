import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'css-app6-lib0', loadChildren: () => import('@nx-angular-incremental-build/css-app6-lib0').then((m) => m.CssApp6Lib0Routes) },
  { path: 'css-app6-lib1', loadChildren: () => import('@nx-angular-incremental-build/css-app6-lib1').then((m) => m.CssApp6Lib1Routes) },
  { path: 'css-app6-lib2', loadChildren: () => import('@nx-angular-incremental-build/css-app6-lib2').then((m) => m.CssApp6Lib2Routes) },
  { path: 'css-app6-lib3', loadChildren: () => import('@nx-angular-incremental-build/css-app6-lib3').then((m) => m.CssApp6Lib3Routes) },
  { path: 'css-app6-lib4', loadChildren: () => import('@nx-angular-incremental-build/css-app6-lib4').then((m) => m.CssApp6Lib4Routes) },
  { path: 'css-app6-lib5', loadChildren: () => import('@nx-angular-incremental-build/css-app6-lib5').then((m) => m.CssApp6Lib5Routes) },
];
