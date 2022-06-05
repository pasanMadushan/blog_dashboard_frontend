import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NbAuthComponent,
  NbLogoutComponent,
  NbRegisterComponent
} from '@nebular/auth';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        redirectTo:'login'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
