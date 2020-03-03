import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // TODO: Inject the auth service
  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (req.url.search(environment.rapidBaseUrl) === -1) {
      this.toastr.error('interceptor', `requete non traitée ${req.url}`);
    } else {
      this.toastr.success('interceptor', `requete traitée ${req.url}`);

    }

    const authReq = (req.url.search(environment.rapidBaseUrl) === -1) ? req : req.clone({
      headers: req.headers.append('Authorization', `Basic ${this.authService.token}`),
      // headers: req.headers.append('Content-Type', `application/json`),
      // withCredentials: true
      // method: 'GET'
    });

    console.log(req);


    return next.handle(authReq).pipe(tap(() => { }, (error) => {
      console.log(error);


      if ((error instanceof HttpErrorResponse) && (error.status === 401 || error.status === 403)) {
        // TODO: Disconnect with the Auth service
        // this.authService.logout();

      }

    }));

  }

}
