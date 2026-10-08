import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'css-app3-lib0', loadChildren: () => import('@nx-angular-incremental-build/css-app3-lib0').then((m) => m.CssApp3Lib0Routes) },
  { path: 'css-app3-lib1', loadChildren: () => import('@nx-angular-incremental-build/css-app3-lib1').then((m) => m.CssApp3Lib1Routes) },
  { path: 'css-app3-lib2', loadChildren: () => import('@nx-angular-incremental-build/css-app3-lib2').then((m) => m.CssApp3Lib2Routes) },
  { path: 'css-app3-lib3', loadChildren: () => import('@nx-angular-incremental-build/css-app3-lib3').then((m) => m.CssApp3Lib3Routes) },
  { path: 'css-app3-lib4', loadChildren: () => import('@nx-angular-incremental-build/css-app3-lib4').then((m) => m.CssApp3Lib4Routes) },
  { path: 'css-app3-lib5', loadChildren: () => import('@nx-angular-incremental-build/css-app3-lib5').then((m) => m.CssApp3Lib5Routes) },
];
