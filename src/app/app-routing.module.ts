import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'cuentas',
        loadChildren: () => import('./Cuentas/cuentas.module').then(m => m.CuentasModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'home',
        loadChildren:
          () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'pagos',
        loadChildren: () => import('./pagos/pagos.module').then(m => m.PagosModule)
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'soporte',
        loadChildren: () => import('./soporte/soporte.module').then(m => m.SoporteModule)
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'taller',
        loadChildren: () => import('./taller/taller.module').then(m => m.TallerModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/authentication/404'
  }
];
