import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthResult, NbAuthService, NbLoginComponent } from '@nebular/auth';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends NbLoginComponent implements OnDestroy {

  protected service: NbAuthService;
  protected options: {};
  protected detector: ChangeDetectorRef;
  protected router: Router;

  user:LoginModel = new LoginModel();

  subscriptions: Subscription[] = [];

  constructor(service: NbAuthService, detector: ChangeDetectorRef, router: Router, private toastrService: NbToastrService) {
    super(service, {
      forms: {
        validation: {
          email: { required: true },
          password: { required: true }
        },
        login: {
          showMessages: true,
        }
      },

    }, detector, router);
  }

  login(): void {
    this.subscriptions.push(
      this.service.authenticate('email', this.user).subscribe((result:NbAuthResult) => {
        if (result.isSuccess()) {
          this.router.navigate([result.getRedirect()]);
          this.toastrService.success('Success!', 'Successfully logged in')
        } else {
          const response: HttpErrorResponse = result.getResponse();
          this.toastrService.danger('Login Failed!', response.error)
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    })
  }

}
