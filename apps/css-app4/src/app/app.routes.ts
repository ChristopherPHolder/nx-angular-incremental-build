import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'css-app4-lib0', loadChildren: () => import('@nx-angular-incremental-build/css-app4-lib0').then((m) => m.CssApp4Lib0Routes) },
  { path: 'css-app4-lib1', loadChildren: () => import('@nx-angular-incremental-build/css-app4-lib1').then((m) => m.CssApp4Lib1Routes) },
  { path: 'css-app4-lib2', loadChildren: () => import('@nx-angular-incremental-build/css-app4-lib2').then((m) => m.CssApp4Lib2Routes) },
  { path: 'css-app4-lib3', loadChildren: () => import('@nx-angular-incremental-build/css-app4-lib3').then((m) => m.CssApp4Lib3Routes) },
  { path: 'css-app4-lib4', loadChildren: () => import('@nx-angular-incremental-build/css-app4-lib4').then((m) => m.CssApp4Lib4Routes) },
  { path: 'css-app4-lib5', loadChildren: () => import('@nx-angular-incremental-build/css-app4-lib5').then((m) => m.CssApp4Lib5Routes) },
];
