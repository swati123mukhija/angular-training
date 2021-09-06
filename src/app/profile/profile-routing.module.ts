import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProfileComponent } from './components/display/display-profile/display-profile.component';
import { DisplayProfilesComponent } from './components/display/display-profiles/display-profiles.component';
import { AddEduComponent } from './components/exp/add-edu/add-edu.component';
import { AddExpComponent } from './components/exp/add-exp/add-exp.component';
import { CreateProfileComponent } from './components/profile/create-profile/create-profile.component';

const routes: Routes = [
  {
    path: 'create-profile',
    component: CreateProfileComponent,
  },
  {
    path: 'add-experience',
    component: AddExpComponent,
  },
  {
    path: 'add-eduction',
    component: AddEduComponent,
  },
  {
    path: 'display-profiles',
    component: DisplayProfilesComponent,
  },
  {
    path: 'display-profile/:id',
    component: DisplayProfileComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
