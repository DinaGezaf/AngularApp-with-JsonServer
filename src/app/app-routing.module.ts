import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { UsersComponent } from './Components/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'userDetails/:id', component: UserDetailsComponent },
  { path: 'addUser/new', component: UserFormComponent },
  { path: 'addUser/:id', component: UserFormComponent },
  { path: '**', component: NotFoundComponent },
  // { path: '**', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
