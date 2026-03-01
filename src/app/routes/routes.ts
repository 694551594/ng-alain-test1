import { Routes } from '@angular/router';
import { startPageGuard } from '@core';
import { authSimpleCanActivate, authSimpleCanActivateChild } from '@delon/auth';

import { LayoutBasicComponent } from '../layout';
import { AComponent } from './a.component';
import { BComponent } from './b.component';
import { CComponent } from './c.component';
import { DComponent } from './d.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test.component';

export const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    children: [
      { path: 'a', component: AComponent, data: { title: 'a' } },
      { path: 'b', component: BComponent, data: { title: 'b' } },
      { path: 'c', component: CComponent, data: { title: 'c' } },
      { path: 'd', component: DComponent, data: { title: 'd' } },
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
