import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'css-app2-lib0', loadChildren: () => import('@nx-angular-incremental-build/css-app2-lib0').then((m) => m.CssApp2Lib0Routes) },
  { path: 'css-app2-lib1', loadChildren: () => import('@nx-angular-incremental-build/css-app2-lib1').then((m) => m.CssApp2Lib1Routes) },
  { path: 'css-app2-lib2', loadChildren: () => import('@nx-angular-incremental-build/css-app2-lib2').then((m) => m.CssApp2Lib2Routes) },
  { path: 'css-app2-lib3', loadChildren: () => import('@nx-angular-incremental-build/css-app2-lib3').then((m) => m.CssApp2Lib3Routes) },
  { path: 'css-app2-lib4', loadChildren: () => import('@nx-angular-incremental-build/css-app2-lib4').then((m) => m.CssApp2Lib4Routes) },
  { path: 'css-app2-lib5', loadChildren: () => import('@nx-angular-incremental-build/css-app2-lib5').then((m) => m.CssApp2Lib5Routes) },
];
