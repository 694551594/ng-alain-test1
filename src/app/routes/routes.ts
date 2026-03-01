import { Routes } from '@angular/router';
import { startPageGuard } from '@core';
import { authSimpleCanActivate, authSimpleCanActivateChild } from '@delon/auth';

import { LayoutBasicComponent } from '../layout';
import { AComponent } from './a.component';
import { BComponent } from './b.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test.component';

export const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    children: [
      { path: 'a', component: AComponent, data: { title: 'a' } },
      { path: 'b', component: BComponent, data: { title: 'b' } },
    ],
  },
  {
    path: '',
    component: LayoutBasicComponent,
    canActivate: [startPageGuard, authSimpleCanActivate],
    canActivateChild: [authSimpleCanActivateChild],
    data: {},
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
  // passport
  { path: '', loadChildren: () => import('./passport/routes').then((m) => m.routes) },
  { path: 'exception', loadChildren: () => import('./exception/routes').then((m) => m.routes) },
  { path: '**', redirectTo: 'exception/404' },
];
