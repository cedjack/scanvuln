import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ScannerModule } from './scanner/scanner.module';
import { LayoutModule } from './ui/layout/layout.module';
import { OopsModule } from './oops/oops.module';
import { AppComponent } from './app.component';

import { ToastrModule } from "ngx-toastr";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './core/auth/auth.service';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { AuthGuard } from './core/auth/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScannerModule,
    BrowserAnimationsModule,
    LayoutModule,
    ToastrModule.forRoot(),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
