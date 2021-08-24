import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./dashboard/admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
  },
];

/*const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
