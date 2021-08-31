import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then(
        (p) => p.AdminDashboardModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-dashboard/user-dashboard.module').then(
        (a) => a.UserDashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
