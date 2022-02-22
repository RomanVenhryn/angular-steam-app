import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@angular/flex-layout';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './core/services/data.service';
import { FakeBackendInterceptor } from './core/interceptors/fake-backend.interceptor';
import { UserService } from './core/services/user.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    CoreModule,
    PublicModule,
    PrivateModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DataService
    )
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true, deps: [UserService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
