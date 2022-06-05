import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NbAlertModule, NbButtonModule, NbCardModule, NbInputModule, NbToastrModule } from '@nebular/theme';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    NbInputModule,
    NbAlertModule,
    NbToastrModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
  ]
})
export class AuthModule { }


