import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import * as fromComponents from './components';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  declarations: [...fromComponents.COMPONENTS],
  exports: [...fromComponents.COMPONENTS],
})
export class CoreModule {
}
