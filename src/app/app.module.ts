import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

import { AuthModule } from './pages/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './core/state/app.state';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/services/auth/auth.interceptor';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({

  declarations: [
    AppComponent,
    ContactComponent,  
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]

})
export class AppModule {}


