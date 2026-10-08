import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'css-app1-lib0', loadChildren: () => import('@nx-angular-incremental-build/css-app1-lib0').then((m) => m.CssApp1Lib0Routes) },
  { path: 'css-app1-lib1', loadChildren: () => import('@nx-angular-incremental-build/css-app1-lib1').then((m) => m.CssApp1Lib1Routes) },
  { path: 'css-app1-lib2', loadChildren: () => import('@nx-angular-incremental-build/css-app1-lib2').then((m) => m.CssApp1Lib2Routes) },
  { path: 'css-app1-lib3', loadChildren: () => import('@nx-angular-incremental-build/css-app1-lib3').then((m) => m.CssApp1Lib3Routes) },
  { path: 'css-app1-lib4', loadChildren: () => import('@nx-angular-incremental-build/css-app1-lib4').then((m) => m.CssApp1Lib4Routes) },
  { path: 'css-app1-lib5', loadChildren: () => import('@nx-angular-incremental-build/css-app1-lib5').then((m) => m.CssApp1Lib5Routes) },
];
